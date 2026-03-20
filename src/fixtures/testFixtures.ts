// path: src/fixtures/testFixtures.ts
import { HomePage } from '../pages/HomePage';
import { IntroPage } from '../pages/IntroPage';
import { baseTest, expect } from './BaseTest';

interface PageFixtures {
  homePage: HomePage;
  introPage: IntroPage;
}

/**
 * Provides typed page fixtures for end-to-end tests.
 */
export const test = baseTest.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  introPage: async ({ page }, use) => {
    await use(new IntroPage(page));
  }
});

export { expect };
export type { PageFixtures };