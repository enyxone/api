# Cloudflare Data Storage Controls

Data is stored using Cloudflare-managed services.

Databases:
- Cloudflare D1 for structured data
- Access controlled via service bindings

Object Storage:
- Cloudflare R2 for media and logs
- Buckets are private by default
- No public ACLs enabled

Security:
- Encryption at rest
- Encryption in transit
- Role-based access
