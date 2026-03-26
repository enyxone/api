export async function saveSubscription(
  userId: string,
  status: "active" | "inactive"
) {
  console.log("Subscription update", userId, status);
}
