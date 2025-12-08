# Security Policy

## Supported Versions

The following versions of the project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability within this project, please follow these steps:

1.  **Do not open a public issue.** This allows us to assess the risk and fix the vulnerability before it can be exploited.
2.  Email the details to **security@wistantkode.com** (or replace with your actual email).
3.  Include as much information as possible:
    *   Type of vulnerability (e.g., XSS, SQL Injection).
    *   Steps to reproduce.
    *   Affected components.

We will acknowledge your report within 48 hours and provide an estimated timeline for the fix.

## Security Best Practices

This project follows industry-standard security practices:
*   **Dependency Scanning:** Regular updates via `pnpm audit`.
*   **Code Analysis:** Static analysis using ESLint and TypeScript.
*   **Secure Headers:** Implementation of Helmet and CSP (where applicable).

Thank you for helping keep Wistant Kode Portfolio secure!
