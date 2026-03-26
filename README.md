```
server/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── routes/
│   │   └── users.route.ts
│   ├── controllers/
│   │   └── users.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── db/
│   │   └── index.ts
│   └── config.ts
├── dist/
├── tsconfig.json
├── package.json
├── .env
```

1. High‑Level Security Architecture
Core Security Principles

Zero Trust API
Defense in Depth
Least Privilege
Strong encryption everywhere
Auditable + tamper‑resistant logging

```
Android App
  │
  │  TLS 1.3 + Certificate Pinning
  ▼
API Gateway (Rate limit, WAF, IP rules)
  │
  ▼
Auth Service (OAuth2 / OpenID / JWT + mTLS)
  │
  ▼
Core API (Express + TypeScript)
  │
  ├── Encrypted Storage Layer
  ├── Audit Logging
  ├── Threat Detection
  └── Monitoring / SIEM
```

2. Technology Stack (Security‑Focused)
Backend

Node.js 20+
Express
TypeScript
Helmet (secure headers)
cors (restricted)
express-rate-limit
csurf (if cookies used)
jsonwebtoken (RS256)
Argon2 (password hashing)
libsodium / crypto (field encryption)
zod (strong input validation)
winston + pino (structured logs)

Infrastructure Security

API Gateway (Cloudflare / AWS API Gateway)
WAF
HSM or Cloud KMS
Secrets Manager
SIEM (Azure Sentinel / Splunk)


3. ISO 27001 Compliance Mapping

































ISO ControlImplementationA.9 Access ControlRBAC + OAuth2A.10 CryptographyAES‑256, RSA‑4096A.12 LoggingImmutable audit logsA.13 Network SecurityTLS 1.3 + WAFA.14 Secure DevSAST / dependency auditA.18 PrivacyData minimization + consent
