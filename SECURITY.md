# Security Overview

This API enforces defense‑in‑depth security with Cloudflare as the external
control plane and application‑level protections internally.

Controls:
- TLS 1.3 enforced at Cloudflare
- JWT authentication (RS256)
- Field‑level AES‑256‑GCM encryption
- Rate limiting & abuse detection
- Centralized logging for SIEM

No plaintext credentials or sensitive user data are stored.
