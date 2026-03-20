// path: src/fixtures/BaseTest.ts
import { test as base } from '@playwright/test';

import { getEnvConfig, type EnvConfig } from '../utils/envHelper';
import { createLogger, type Logger } from '../utils/logger';

interface CoreFixtures {
  logger: Logger;
  envConfig: EnvConfig;
  baseHooks: void;
}

/**
 * Provides the shared Playwright Test foundation with setup and teardown hooks.
 */
export const baseTest = base.extend<CoreFixtures>({
  logger: async ({}, use, testInfo) => {
    const logger = createLogger(testInfo.title);
    await use(logger);
  },

  envConfig: async ({}, use) => {
    await use(getEnvConfig());
  },

  baseHooks: [
    async ({ logger, page }, use, testInfo) => {
      logger.info(`Starting test: ${testInfo.title}`);

      await use();

      if (testInfo.status !== testInfo.expectedStatus) {
        logger.error(`Test failed with status ${testInfo.status}`);
        await page.screenshot({
          path: testInfo.outputPath('failure-screenshot.png'),
          fullPage: true
        });
      }

      logger.info(`Finished test with status: ${testInfo.status}`);
    },
    { auto: true }
  ]
});

export { expect } from '@playwright/test';
export type { CoreFixtures };