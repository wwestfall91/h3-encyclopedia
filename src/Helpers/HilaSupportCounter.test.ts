import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.resetModules();
});

async function loadCounter(apiUrl = "https://example.com/counter") {
  vi.stubEnv("VITE_HILA_SUPPORT_API_URL", apiUrl);
  return import("./HilaSupportCounter");
}

describe("HilaSupportCounter", () => {
  it("reads the shared count without incrementing it", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ count: 42 }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);
    const { getHilaSupportCount } = await loadCounter();

    await expect(getHilaSupportCount()).resolves.toBe(42);

    const requestedUrl = new URL(fetchMock.mock.calls[0][0]);
    expect(requestedUrl.searchParams.get("action")).toBe("get");
  });

  it("returns the server total after incrementing", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ count: 43 }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);
    const { incrementHilaSupportCount } = await loadCounter();

    await expect(incrementHilaSupportCount()).resolves.toBe(43);

    const requestedUrl = new URL(fetchMock.mock.calls[0][0]);
    expect(requestedUrl.searchParams.get("action")).toBe("increment");
  });

  it("rejects invalid counter responses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ count: "43" }), { status: 200 }),
      ),
    );
    const { getHilaSupportCount } = await loadCounter();

    await expect(getHilaSupportCount()).rejects.toThrow(
      "The support counter returned an invalid response.",
    );
  });

  it("fails clearly when the API URL is not configured", async () => {
    const { getHilaSupportCount } = await loadCounter("");

    await expect(getHilaSupportCount()).rejects.toThrow(
      "The Hila support counter API is not configured.",
    );
  });
});
