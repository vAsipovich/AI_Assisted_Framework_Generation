// path: tests/e2e/home.spec.ts
import { test } from '../../src/fixtures/testFixtures';

test.describe('Home page', () => {
  test('should open the docs journey from the header', async ({ homePage, logger }) => {
    logger.info('Opening the home page');
    await homePage.open();
    await homePage.expectLoaded();
    await homePage.header.expectDocsLinkVisible();

    logger.info('Navigating to the docs page');
    await homePage.header.openDocs();

    await homePage.expectUrlContains('docs');
  });

  test('should open the getting started guide from the hero section', async ({ homePage }) => {
    await homePage.open();
    await homePage.openGetStarted();
    await homePage.expectUrlContains('docs');
  });
});