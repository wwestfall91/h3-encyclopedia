type CounterResponse = {
  count: number;
};

const COUNTER_API_URL = import.meta.env.VITE_HILA_SUPPORT_API_URL?.trim();

function getCounterUrl(action: "get" | "increment") {
  if (!COUNTER_API_URL) {
    throw new Error("The Hila support counter API is not configured.");
  }

  const url = new URL(COUNTER_API_URL);
  url.searchParams.set("action", action);
  url.searchParams.set("_", Date.now().toString());
  return url;
}

async function requestCounter(
  action: "get" | "increment",
  signal?: AbortSignal,
): Promise<number> {
  const response = await fetch(getCounterUrl(action), {
    method: "GET",
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error(`The support counter returned HTTP ${response.status}.`);
  }

  const result: unknown = await response.json();
  if (
    typeof result !== "object" ||
    result === null ||
    !("count" in result) ||
    typeof (result as CounterResponse).count !== "number" ||
    !Number.isSafeInteger((result as CounterResponse).count) ||
    (result as CounterResponse).count < 0
  ) {
    throw new Error("The support counter returned an invalid response.");
  }

  return (result as CounterResponse).count;
}

export function getHilaSupportCount(signal?: AbortSignal) {
  return requestCounter("get", signal);
}

export function incrementHilaSupportCount() {
  return requestCounter("increment");
}
