<!-- README for Playwright automation tests -->

# Playwright Test Automation for ShopStack

This repository contains an initial set of **Playwright** tests written in TypeScript to automate
key workflows of the ShopStack e‑commerce application.  These tests complement the
manual test cases documented in the other repositories of this portfolio and serve as a
starting point for a scalable automation suite.

## Getting Started

Follow these steps to run the tests locally:

1. **Install Node.js** – Ensure you have Node.js 18 or later installed.
2. **Install dependencies** – Run `npm ci` to install all development dependencies.
3. **Install browsers** – Run `npx playwright install --with-deps` to download the
   necessary browser binaries.
4. **Configure environment** – Copy `.env.example` to `.env` and set any
   environment variables such as `BASE_URL` and test user credentials.
5. **Run tests** – Use `npm test` to run all tests headless, or `npm run test:headed`
   to run with the Playwright Inspector.

## Project Structure

```
qa-playwright-tests/
  ├─ tests/                 # Spec files organised by feature
  │   ├─ auth/              # Authentication flows
  │   ├─ catalog/           # Product search and filters
  │   ├─ cart-checkout/     # Cart and checkout flows
  │   ├─ profile/           # User profile management
  │   └─ api/               # Example API tests using Playwright's request API
  ├─ pages/                 # Page object abstractions
  ├─ fixtures/              # Custom fixtures and test data helpers
  ├─ helpers/               # Utility functions (e.g. data factories)
  ├─ config/                # Config files and sample data
  ├─ .github/workflows/     # Continuous integration pipeline
  ├─ package.json           # Project configuration and scripts
  ├─ playwright.config.ts   # Playwright test runner configuration
  ├─ tsconfig.json          # TypeScript configuration
  └─ env.example            # Sample environment variables
```

## Running in CI

The included GitHub Actions workflow runs the test suite against Chromium, Firefox
and WebKit on every push and pull request to `main`.  Failed tests will upload the
HTML report as an artefact for inspection.

## Adding Tests

Tests are grouped by feature under the `tests/` folder.  Each spec file can be
tagged using the title to enable targeted runs (e.g. `@smoke`, `@regression`).
Refer to the manual test cases in `qa-test-cases` for guidance on what to
automate.  Additional utilities and fixtures can be added under `helpers/` and
`fixtures/` as the suite grows.

## License

This project is provided as part of a personal portfolio and is licensed under the
MIT license.