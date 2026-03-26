import crypto from "crypto";

const KEY = Buffer.from(process.env.FIELD_KEY!, "hex");

export function encrypt(value: string) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", KEY, iv);

  const encrypted = Buffer.concat([
    cipher.update(value, "utf8"),
    cipher.final()
  ]);

  return {
    iv: iv.toString("hex"),
    value: encrypted.toString("hex"),
    tag: cipher.getAuthTag().toString("hex")
  };
}
