# Key Management & HSM

Keys are managed using a cloud KMS backed by Hardware Security Modules (HSMs).

Controls:
- FIPS 140-2 Level 3 HSMs
- Envelope encryption
- Automatic rotation every 90 days
- Environment-specific keys (prod, stage, dev)
- No application-level key access
