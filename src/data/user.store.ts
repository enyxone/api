import { db } from "./db";
import { encrypt } from "../security/encryption";

export async function saveUser(id: string, email: string) {
  const encrypted = encrypt(email);
  await db.query(
    "INSERT INTO users (id, email) VALUES (?, ?)",
    [id, JSON.stringify(encrypted)]
  );
}
