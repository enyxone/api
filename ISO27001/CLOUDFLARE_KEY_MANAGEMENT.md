# Cloudflare Key Management & Cryptography

This system uses Cloudflare’s managed cryptographic services for key
storage, encryption, and TLS termination.

Key controls:
- Secrets stored in Cloudflare Secrets Manager
- Secrets never exposed in source code
- Environment-specific secrets (prod/stage/dev)
- Access restricted via Cloudflare Zero Trust
- HTTPS/TLS terminated using Cloudflare-managed certificates

Cryptographic protections:
- AES-256 for sensitive fields
- TLS 1.3 enforced
- Perfect forward secrecy enabled

Key lifecycle:
- Secrets rotated on a scheduled basis
- Compromised secrets immediately revoked
