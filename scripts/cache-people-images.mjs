import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const rootDirectory = process.cwd();
const peopleFile = join(rootDirectory, "public", "people.txt");
const outputDirectory = join(rootDirectory, "public", "people-images");
const sourcesFile = join(rootDirectory, "scripts", "people-image-sources.json");
const publicPathPrefix = "people-images/";
const concurrency = 8;
const maxDownloadBytes = 25 * 1024 * 1024;
const refreshCachedImages = process.argv.includes("--refresh");

function isRemoteImage(image) {
  return /^https?:\/\//i.test(image);
}

function imageFilename(name) {
  const slug = name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "person";
  const hash = createHash("sha256").update(name).digest("hex").slice(0, 8);
  return `${slug}-${hash}.webp`;
}

async function readSources() {
  try {
    return JSON.parse(await readFile(sourcesFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

async function downloadFrom(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      "User-Agent": "Mozilla/5.0 (compatible; H3EncyclopediaImageCache/1.0)",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(20_000),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const declaredSize = Number(response.headers.get("content-length"));
  if (declaredSize > maxDownloadBytes) {
    throw new Error(`image is larger than ${maxDownloadBytes / 1024 / 1024} MB`);
  }

  const image = Buffer.from(await response.arrayBuffer());
  if (image.length > maxDownloadBytes) {
    throw new Error(`image is larger than ${maxDownloadBytes / 1024 / 1024} MB`);
  }
  return image;
}

async function downloadImage(url) {
  try {
    return await downloadFrom(url);
  } catch (originError) {
    const proxySource = url.replace(/^https?:\/\//i, "");
    const proxyUrl = `https://wsrv.nl/?url=${encodeURIComponent(proxySource)}&output=webp`;
    try {
      return await downloadFrom(proxyUrl);
    } catch (proxyError) {
      throw new Error(`${originError.message}; proxy: ${proxyError.message}`);
    }
  }
}

async function cacheImage(person, sources) {
  const currentImage = person.columns[1];
  const source = isRemoteImage(currentImage) ? currentImage : sources[person.name];
  const isGeneratedImage = currentImage.startsWith(publicPathPrefix);

  if (
    !source ||
    (!isRemoteImage(currentImage) && (!isGeneratedImage || !refreshCachedImages))
  ) {
    return { status: "skipped" };
  }

  const filename = imageFilename(person.name);
  const publicPath = `${publicPathPrefix}${filename}`;
  const destination = join(outputDirectory, filename);
  const temporaryDestination = `${destination}.tmp`;

  try {
    const image = await downloadImage(source);
    await sharp(image, { animated: false, limitInputPixels: 100_000_000 })
      .rotate()
      .resize(320, 320, { fit: "cover", position: "attention" })
      .webp({ quality: 80, effort: 5 })
      .toFile(temporaryDestination);
    await rename(temporaryDestination, destination);
    person.columns[1] = publicPath;
    sources[person.name] = source;
    return { status: "cached" };
  } catch (error) {
    console.error(`Failed: ${person.name} (${error.message})`);
    return { status: "failed" };
  }
}

async function main() {
  const contents = await readFile(peopleFile, "utf8");
  const newline = contents.includes("\r\n") ? "\r\n" : "\n";
  const hasTrailingNewline = contents.endsWith("\n");
  const lines = contents.trimEnd().split(/\r?\n/);
  const header = lines.shift();
  const people = lines.map((line) => {
    const columns = line.split("\t");
    return { name: columns[0], columns };
  });
  const sources = await readSources();
  const results = [];

  await mkdir(outputDirectory, { recursive: true });

  for (let index = 0; index < people.length; index += concurrency) {
    const batch = people.slice(index, index + concurrency);
    results.push(...(await Promise.all(batch.map((person) => cacheImage(person, sources)))));
    process.stdout.write(`\rProcessed ${Math.min(index + concurrency, people.length)}/${people.length}`);
  }

  const updatedContents = [header, ...people.map(({ columns }) => columns.join("\t"))].join(newline);
  await writeFile(peopleFile, updatedContents + (hasTrailingNewline ? newline : ""));
  await mkdir(dirname(sourcesFile), { recursive: true });
  await writeFile(sourcesFile, `${JSON.stringify(sources, null, 2)}\n`);

  const cached = results.filter(({ status }) => status === "cached").length;
  const failed = results.filter(({ status }) => status === "failed").length;
  console.log(`\nCached ${cached} images; ${failed} failed; ${people.length - cached - failed} unchanged.`);
  if (failed > 0) process.exitCode = 1;
}

await main();