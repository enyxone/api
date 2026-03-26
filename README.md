## 1. Security Architecture
Core Security Principles

Zero Trust API
Defense in Depth
Least Privilege
Strong encryption everywhere
Auditable + tamper‑resistant logging

```
Android App
  ↓ TLS 1.3
Cloudflare Edge
  ├── API Shield
  ├── WAF
  ├── Rate Limiting
  ├── Bot Detection
  ↓
Cloudflare Worker (Auth + Validation)
  ↓
Auth Service (OAuth2 / OpenID / JWT + mTLS)
  ↓
Core API (Express + TypeScript)
  │
  ├── Encrypted Storage Layer (D1)
  ├── Audit Logging (R2)
  ├── Threat Detection
  └── Monitoring / SIEM
```

## 2. Technology Stack (Security‑Focused)

- Node.js 20+ 
- Express 
- TypeScript 
- Helmet (secure headers) 
- cors (restricted) 
- express-rate-limit 
- csurf (if cookies used) 
- jsonwebtoken (RS256) 
- Argon2 (password hashing) 
- libsodium / crypto (field encryption) 
- zod (strong input validation) 
- winston + pino (structured logs) 

## 3. Infrastructure Security

- Cloudflare Zero Trust A.9 (Access Control) 
- Cloudflare KMS / Secrets A.10 (Cryptography) 
- TLS / Certificates A.13 (Network Security) 
- Cloudflare WAF A.13.1 Workers + API Gateway A.14 (Secure Dev) 
- Logpush → SIEM A.12.4 (Logging) 
- R2 / D1 A.8 (Asset Mgmt) 


- ISO Control Implementation A.9 
- Access ControlRBAC + OAuth2 A.10 
- Cryptography AES‑256, RSA‑4096 A.12 
- Logging Immutable audit logs A.13 
- Network Security TLS 1.3 + WAF A.14 
- Secure DevSAST / dependency audit A.18 
- Privacy Data minimization + consent 
