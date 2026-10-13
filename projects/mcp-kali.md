# mcp-kali

**Project status:** Security-Focused MCP Server Project in Development
**GitHub repository:** To be confirmed

> **Verification note:** This document separates confirmed project scope from details that have not yet been verified. “To be verified” means that the implementation, evidence, or exact design has not been confirmed for this document. Proposed work below is not a claim that a feature already exists.

## Document status

- Last reviewed: 2026-10-13
- Evidence status: Pending repository and test verification
- Next documentation update: After confirming repository structure, implemented controls, and test results

## 1. Project overview

`mcp-kali` is a security-focused Model Context Protocol (MCP) server project exploring controlled database access, authentication, authorization, audit logging, threat modeling, and automated testing. VMware Tanzu Greenplum is the target integration.

### Current status

- **Project status:** Security-Focused MCP Server Project in Development
- **Test status:** To be verified
- **Greenplum integration:** Target integration
- **Python foundation:** To be verified
- **TypeScript implementation:** In development
- **GitHub repository:** To be confirmed

This overview describes the confirmed project scope and declared status only. It does not assert completion of Greenplum integration or successful test results.

## 2. Problem statement

The project explores how an MCP server can provide controlled access to database capabilities while treating authentication, authorization, audit logging, threat modeling, and automated testing as security concerns.

The exact user roles, database operations, deployment environment, trust boundaries, and operational requirements have not been confirmed: **To be verified**.

## 3. Objectives

The stated areas of exploration are:

1. Explore controlled database access through an MCP server.
2. Address authentication and authorization as part of the access model.
3. Explore audit logging to support visibility into relevant activity.
4. Develop or document a threat model appropriate to the confirmed design.
5. Establish an automated testing approach.
6. Treat VMware Tanzu Greenplum as the target database integration.

Detailed acceptance criteria and completion evidence for each objective: **To be verified**.

## 4. Architecture overview

The project is an MCP server project and identifies VMware Tanzu Greenplum as its target integration. Beyond those facts, the following architecture details are **To be verified**:

- MCP client(s) and supported client configuration.
- Server entry point, internal modules, and component boundaries.
- Request flow from MCP tool invocation to database operation and response.
- Authentication and authorization enforcement points.
- Database connectivity method, driver, and supported operations.
- Transport, deployment model, and network trust boundaries.
- Configuration, secret handling, and error-handling flow.

No component diagram is included here because a verified request flow and component layout have not been provided.

## 5. Security threat model summary

Threat modeling is part of the stated project scope. A completed threat model, its methodology, and its findings are **To be verified**.

The initial review should confirm, rather than assume, the following items:

- **Assets:** which database data, credentials, configuration, and audit records are in scope — **To be verified**.
- **Actors and trust boundaries:** which clients and operators can interact with the server, and where trust changes — **To be verified**.
- **Authentication threats:** how unauthorized use could be attempted and what protections are actually implemented — **To be verified**.
- **Authorization threats:** whether a caller could perform database actions beyond its intended permissions — **To be verified**.
- **Data-access threats:** which database operations are exposed and how unintended access is prevented — **To be verified**.
- **Audit threats:** what activity must be recorded and how completeness and sensitive data handling are assessed — **To be verified**.
- **Risk ratings and residual risk:** likelihood, impact, mitigations, and accepted risks — **To be verified**.

These are review topics, not claims that specific vulnerabilities have been found or that mitigations are already implemented.

## 6. Security controls

Authentication, authorization, audit logging, threat modeling, and automated testing are confirmed areas of project scope. The precise controls and implementation evidence have not been confirmed.

| Control area | Current documented position | Details requiring verification |
|---|---|---|
| Authentication | In project scope | Mechanism, configuration, session/token behavior, and tests: **To be verified** |
| Authorization | In project scope | Permission model, enforcement points, and denial behavior: **To be verified** |
| Controlled database access | Project objective | Exposed operations, query boundaries, and privilege constraints: **To be verified** |
| Audit logging | In project scope | Event coverage, sensitive-data handling, storage, and retention: **To be verified** |
| Threat modeling | In project scope | Method, documented threats, risk ratings, and mitigations: **To be verified** |
| Automated testing | In project scope | Framework, test coverage, execution results, and CI integration: **To be verified** |
| Secrets and configuration | Implementation details not confirmed | Storage, loading, access restrictions, and rotation process: **To be verified** |
| Transport and deployment security | Implementation details not confirmed | Protocol configuration, network exposure, and deployment assumptions: **To be verified** |

No control in this table should be read as independently verified or complete merely because it appears in the project scope.

## 7. Technology stack

| Technology / component | Status |
|---|---|
| Model Context Protocol (MCP) | Project protocol area; SDK and version: **To be verified** |
| VMware Tanzu Greenplum | Target integration |
| Python foundation | To be verified |
| TypeScript implementation | In development |
| Database driver/client | To be verified |
| Authentication/authorization libraries | To be verified |
| Test framework and CI tooling | To be verified |
| Runtime and deployment environment | To be verified |

## 8. Repository structure

The documentation path for this page is `projects/mcp-kali.md`. The source repository layout has not been confirmed for this document.

- Application/server entry point: **To be verified**
- Source directories and module responsibilities: **To be verified**
- Database integration module(s): **To be verified**
- Authentication and authorization module(s): **To be verified**
- Audit logging module(s): **To be verified**
- Automated test directories and fixtures: **To be verified**
- Configuration and environment example files: **To be verified**
- Build, lint, and CI configuration: **To be verified**

Update this section only after checking the repository tree directly.

## 9. Current implementation status

| Item | Status |
|---|---|
| Overall project | Security-Focused MCP Server Project in Development |
| Test status | To be verified |
| Greenplum integration | Target integration |
| Python foundation | To be verified |
| TypeScript implementation | In development |
| GitHub repository | To be confirmed |

Specific modules, implemented tool behavior, successful test runs, and integration evidence: **To be verified**.

## 10. Testing strategy

**Existing test results:** To be verified. No passing-test count or successful integration result is asserted in this document.

The following is a proposed strategy to review and confirm against the actual implementation, not a report of tests that already exist:

1. Define requirements and expected behavior for each exposed MCP operation.
2. Test authentication and authorization outcomes, including rejected or unauthorized requests where applicable.
3. Test database-access boundaries and expected behavior for invalid or disallowed operations.
4. Test audit events and confirm that secrets or other sensitive values are handled appropriately.
5. Add integration tests for VMware Tanzu Greenplum once the integration setup and supported operations are confirmed.
6. Run regression tests for fixes and changes; document the exact command, environment, date, and result for each reported test run.

Test framework, test inventory, CI workflow, fixtures, and actual results: **To be verified**.

## 11. Roadmap

The sequence below is a proposed planning outline. Priority, owners, and completion dates are **To be verified**.

1. Verify the repository structure, runtime assumptions, and current implemented behavior.
2. Document requirements, exposed database operations, actors, assets, and trust boundaries.
3. Verify the authentication and authorization design and its enforcement points.
4. Confirm the audit logging requirements and how sensitive information is handled.
5. Validate the TypeScript implementation status and the Python foundation status with repository evidence.
6. Plan and verify the VMware Tanzu Greenplum integration, including prerequisites and supported operations.
7. Establish automated tests and record reproducible results without overstating test coverage.
8. Update this document when implementation or evidence changes.

## 12. Key lessons learned

Verified implementation lessons: **To be verified**. No specific development outcome or security finding has been confirmed for inclusion yet.

Documentation principle for this project: distinguish the intended scope from implemented behavior, and attach evidence before describing a control, test result, or integration as complete.

## 13. Future improvements

Potential areas to evaluate after verifying the current repository and requirements:

- Document a concrete architecture and request/data-flow diagram.
- Complete a threat model with identified assets, trust boundaries, risks, and mitigations.
- Document authentication and authorization behavior with test evidence.
- Define audit-event coverage and sensitive-data handling requirements.
- Confirm Greenplum prerequisites and supported integration behavior.
- Add or refine automated tests and publish reproducible test evidence.
- Document deployment assumptions, configuration, secret management, and operational limitations.
- Maintain a status history so the documentation reflects verified changes.

These are candidate improvements, not statements that gaps have already been demonstrated or that the listed work has begun.
