# Secure MCP Server for Kali Linux

- **Repository:** [Zer-security/secure-mcp-server](https://github.com/Zer-security/secure-mcp-server)
- **Status:** Release `v1.0.0` is available; ongoing development and hardening.
**Last reviewed:** 2026-10-14

## Overview

`secure-mcp-server` is an MCP server for a Kali Linux host that intentionally exposes a small set of explicitly registered, read-oriented tools. It does not expose a generic shell, command-execution endpoint, or arbitrary-code execution interface.

The server is intended for controlled use on a trusted local network. It is not designed to be exposed directly to the public internet, and it has not been independently audited.

## Why this project exists

An AI client should not automatically receive broad host access simply because it connects to an MCP server. This project explores a narrower model: authenticate the client, authorize a specific MCP scope, and expose only the tools the server has intentionally registered.

## Available tools

| Tool | Purpose |
|---|---|
| `kali_info` | Returns Kali/server information |
| `system_status` | Reports general system status |
| `disk_status` | Reports disk/storage information |
| `memory_status` | Reports memory information |
| `network_status` | Reports network status |
| `network_interfaces` | Lists network interface information |
| `read_text_file` | Reads permitted text-file content |

The file-reading tool rejects absolute paths, path traversal, and symlink escapes outside the permitted workspace, and enforces a 1 MiB maximum file size.

## Security controls documented by the repository

- OAuth 2.0 Authorization Code and Refresh Token flows with PKCE S256.
- The `mcp:read` authorization scope and token revocation.
- EdDSA (Ed25519) JWT signing and SQLite-backed OAuth state.
- HTTPS with TLS 1.2 or later, ECDSA P-256 certificates, certificate/SAN validation, and explicit host allowlisting.
- DNS-rebinding protection.
- Rate limiting on OAuth endpoints and `/mcp`.
- Audit logging with recursive redaction of sensitive values.
- Refusal to run as root.
- Explicitly allowlisted, read-only MCP tools; no generic shell endpoint.

See the [repository README](https://github.com/Zer-security/secure-mcp-server#security-model) for configuration and implementation details.

## Architecture at a glance

```text
MCP client (for example, Termux)
          |
          | HTTPS + OAuth 2.0 / PKCE
          v
Kali Linux MCP server
          |
          +-- Host validation and rate limiting
          +-- OAuth authorization
          +-- Audit logging
          |
          v
Explicitly allowlisted, read-only tools
```

The authorized client can view information returned by an allowed tool. For that reason, tool output and the authorization scope still matter; read-only does not mean risk-free.

## Testing evidence

The repository README currently documents `123 passed` for CI, with `tests/test_integration.py` excluded from that CI command. It also records `124 passed` for the full historical test suite associated with release `v1.0.0`. These are different test runs and should not be treated as interchangeable.

For the latest commands and evidence, see the [secure-mcp-server README](https://github.com/Zer-security/secure-mcp-server#testing). Test counts can change as the repository evolves.

## Limitations

- Designed for a trusted local network, not public-internet exposure.
- The default TLS certificate is self-signed and requires an appropriate client trust configuration.
- The rate limiter is process-local, not distributed/shared.
- The project has not been independently audited.
- A permitted read-only tool may still return sensitive information to an authorized client.

## Development principles

Least privilege, explicit allowlisting, secure defaults, validation, auditability, and reproducible tests guide the project. Features should be described as complete only when the implementation and relevant evidence have been checked.

## Next steps

- Continue reviewing tool behavior and authorization boundaries.
- Keep security tests reproducible and document the exact command/result.
- Review dependency updates and transport/configuration assumptions.
- Update this page when implementation or verifiable evidence changes.
