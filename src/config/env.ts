export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  encryptionKey: process.env.FIELD_ENCRYPTION_KEY!,
  jwtPublicKey: process.env.JWT_PUBLIC_KEY!
};
