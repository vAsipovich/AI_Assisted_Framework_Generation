// path: tests/e2e/intro.spec.ts
import { test } from '../../src/fixtures/testFixtures';

test.describe('Intro page', () => {
  test('should display 4 links in the "You will learn" section', async ({ introPage, logger }) => {
    logger.info('Opening the intro page');
    await introPage.open();

    logger.info('Verifying "You will learn" contains 4 links');
    await introPage.expectYouWillLearnLinkCount(4);
  });
});
