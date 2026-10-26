const HILA_SUPPORT_COUNT_PROPERTY = "HILA_SUPPORT_COUNT";

function doGet(event) {
  const action = event && event.parameter ? event.parameter.action : "get";

  if (action === "get") {
    return createCounterResponse_(getSupportCount_());
  }

  if (action !== "increment") {
    return createErrorResponse_("Unknown action.");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const nextCount = getSupportCount_() + 1;
    PropertiesService.getScriptProperties().setProperty(
      HILA_SUPPORT_COUNT_PROPERTY,
      String(nextCount),
    );
    return createCounterResponse_(nextCount);
  } finally {
    lock.releaseLock();
  }
}

function getSupportCount_() {
  const storedCount = PropertiesService.getScriptProperties().getProperty(
    HILA_SUPPORT_COUNT_PROPERTY,
  );
  const count = Number(storedCount || "0");
  return Number.isSafeInteger(count) && count >= 0 ? count : 0;
}

function createCounterResponse_(count) {
  return ContentService.createTextOutput(JSON.stringify({ count: count }))
    .setMimeType(ContentService.MimeType.JSON);
}

function createErrorResponse_(message) {
  return ContentService.createTextOutput(JSON.stringify({ error: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
