import { Episode } from "../models/Episode.ts";
import { Moment } from "../models/Moments/Moment.tsx";
import { Person } from "../models/Person.ts";
import { Soundbite } from "../models/Soundbite.ts";
import { Topic } from "../models/Topic.ts";

function readFile(filePath: string): Promise<string> {
  return fetch(filePath)
    .then((r) => r.text())
    .then((text) => {
      return text;
    });
}

export async function getAllSoundbites() {
  let soundbites: Soundbite[] = [];

  try {
    const data = await readFile("../../soundbites.txt");

    const lines = data.split("\n");
    lines.shift();

    lines?.map((line: string) => {
      const data = line.split("\t");
      soundbites.push(
        new Soundbite(
          data[0],
          data[1],
          data[2],
          data[3] as unknown as number,
          data[4],
          data[5] as unknown as number,
          data[6] == "" ? "Misc" : data[6],
          data[7],
          data[8] == "\r" ? "" : data[8]
        )
      );
    });
  } catch (e) {
    console.log(e);
  }

  return soundbites;
}

export function getAllPeople() {
  let people: Person[] = [];
  try {
    readFile("../../people.txt").then((x) => {
      const lines = x.split("\n");
      lines.shift();

      lines?.map((line: string) => {
        const data = line.split("\t");
        // people.txt now has columns: Name, Image, Allegiance, Nicknames
        const name = data[0] || "";
        const image = data[1] || "";
        const allegiance = data[2] || "";
        const nicknamesRaw = data[3] || "";
        // Nicknames are comma-separated, trim whitespace and ignore empties
        const nicknames = nicknamesRaw
          .split(",")
          .map((n) => n.trim())
          .filter((n) => n.length > 0);

        people.push(new Person(name, image, allegiance, nicknames));
      });
    });
  } catch (e) {
    console.log(e);
  }

  return people;
}

export async function getAllEpisodes(): Promise<Episode[]> {
  let episodes: Episode[] = [];
  try {
    const data = await readFile("../../episodes.txt");

    const lines = data.split("\n");
    lines.shift();

    lines?.map((line: string) => {
      const data = line.split("\t");
      episodes.push(
        new Episode(
          data[0],
          data[1] as unknown as number,
          data[2],
          data[3],
          data[4],
          data[5] == undefined ? [] : data[5].split(", ")
        )
      );
    });
  } catch (e) {
    console.log("ERROR:", e);
  }

  return episodes;
}

export async function getAllMoments(): Promise<Moment[]> {
  let moments: Moment[] = [];

  try {
    const data = await readFile("../../moments.txt");

    const lines = data.split("\n");
    lines.shift();

    lines?.map((line: string) => {
      const data = line.split("\t");

      const title = data[0];
      const episodeType = data[1];
      const episodeNumber = data[2] as unknown as number;
      const startTime = data[3] as unknown as number;
      const endTime = data[4] as unknown as number;
      const url = data[5];
      const people = data[6];
      const tags = data[7];
      const image = data[8];
      const episodeName = data[9];
      const section = data[10];
      const date = data[11];

      let moment = new Moment(
        title,
        episodeType,
        episodeNumber,
        startTime,
        endTime,
        url,
        people,
        tags,
        image,
        episodeName,
        section,
        date
      );
      moments.push(moment);
    });
  } catch (e) {
    console.log(e);
  }

  return moments;
}

export async function getAllTopics(): Promise<Topic[]> {
  let topics: Topic[] = [];

  try {
    const data = await readFile("../../topics.txt");

    const lines = data.split("\n");
    lines.shift();

    lines?.map((line: string) => {
      const data = line.split("\t");
      topics.push(new Topic(data[0], data[1], data[2], data[3]));
    });
  } catch (e) {
    console.log(e);
  }

  return topics;
}
