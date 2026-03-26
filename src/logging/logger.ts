export function log(event: object) {
  console.log(JSON.stringify({
    ...event,
    timestamp: new Date().toISOString()
  }));
}
