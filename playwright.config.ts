// path: playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

import { getEnvConfig } from './src/utils/envHelper';

const env = getEnvConfig();

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  timeout: env.defaultTimeoutMs,
  expect: {
    timeout: env.actionTimeoutMs
  },
  outputDir: 'test-results',
  use: {
    baseURL: env.baseUrl,
    headless: env.headless,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: env.actionTimeoutMs,
    navigationTimeout: env.defaultTimeoutMs
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});