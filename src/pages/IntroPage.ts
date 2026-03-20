// path: src/pages/IntroPage.ts
import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Models the Playwright "Introduction" documentation page.
 */
export class IntroPage extends BasePage {
  /**
   * Creates an intro page object.
   *
   * @param page The Playwright page instance.
   */
  public constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the introduction page and waits for its main content to be ready.
   */
  public async open(): Promise<void> {
    await this.navigate('/docs/intro');
    await this.waitForReadyState();
  }

  /**
   * Verifies the number of links inside the "You will learn" section.
   *
   * @param count The expected number of links.
   */
  public async expectYouWillLearnLinkCount(count: number): Promise<void> {
    await expect(this.getYouWillLearnLinks()).toHaveCount(count);
  }

  private getYouWillLearnLinks() {
    return this.page
      .getByRole('list')
      .filter({ has: this.page.getByRole('link', { name: /How to install Playwright/i }) })
      .getByRole('link');
  }
}
