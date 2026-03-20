<!-- path: README.md -->
# Playwright TypeScript Framework Skeleton

This repository contains a clean Playwright Test automation framework skeleton built with TypeScript.

## Structure

```text
src/
  components/
  fixtures/
  pages/
  utils/
tests/
  e2e/
```

## Conventions

- Page Object Model for pages and Component Object Model for reusable UI sections.
- `BasePage` centralizes shared navigation and assertion helpers.
- `BaseTest` centralizes setup and teardown hooks through Playwright fixtures.
- Public test interactions are exposed as typed methods, not raw locators.
- Selectors are limited to `getByRole`, `getByLabel`, and `getByTestId`.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and adjust values if needed.

3. Install Playwright browsers:

   ```bash
   npm run pw:install
   ```

## Commands

- `npm test`
- `npm run test:headed`
- `npm run test:ui`
- `npm run test:debug`
- `npm run typecheck`

## Environment Variables

- `BASE_URL`: Base URL for the application under test.
- `HEADLESS`: Browser headless mode toggle.
- `DEFAULT_TIMEOUT_MS`: Global test timeout.
- `ACTION_TIMEOUT_MS`: Default action and expectation timeout.

## Extending the Framework

1. Add new page objects under `src/pages`.
2. Add reusable component objects under `src/components`.
3. Expose typed fixtures from `src/fixtures/testFixtures.ts`.
4. Add end-to-end specs under `tests/e2e`.

## AI-Assisted Refactoring & Upgrades
After the previous step there is no need to Merge Repetitive Methods or Refactor Test Steps in the way it is described in the tasks of the module

## Safe AI Usage: Review & Verification
Both Self-Review and Test Coverage Report didn't find any violations
