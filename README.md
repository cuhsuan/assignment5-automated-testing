# Assignment 5 — Outstanding CI/CD Pipeline

![Build-Test-Release](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)

Build → Unit Test + Matrix Test → Integration Test → Staging → Production (manual approval).

## Local run

```bash
npm ci
npm run build
npm test
```

Replace `OWNER/REPO` in the badge with your repository path. In GitHub Settings → Environments create `staging` and `production`, and configure required reviewers for `production` if your repository plan supports this protection feature. GitHub Releases are used to simulate deployment; this does not deploy a live server.
