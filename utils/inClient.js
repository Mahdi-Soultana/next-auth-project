export function inClient() {
    let client;
  if (typeof window !== "undefined") {
    client = true;
    }
    return client
}