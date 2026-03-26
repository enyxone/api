import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
  return jwt.verify(
    token,
    process.env.JWT_PUBLIC_KEY!,
    { algorithms: ["RS256"] }
  );
}
