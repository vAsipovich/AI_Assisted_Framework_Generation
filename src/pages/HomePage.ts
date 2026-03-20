// path: src/pages/HomePage.ts
import type { Page } from '@playwright/test';

import { HeaderComponent } from '../components/HeaderComponent';
import { BasePage } from './BasePage';

/**
 * Models the Playwright home page used by the sample test.
 */
export class HomePage extends BasePage {
  public readonly header: HeaderComponent;

  /**
   * Creates a home page object.
   *
   * @param page The Playwright page instance.
   */
  public constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
  }

  /**
   * Opens the home page and waits for its main content to be ready.
   */
  public async open(): Promise<void> {
    await this.navigate('/');
    await this.waitForReadyState();
  }

  /**
   * Verifies that the home page hero heading is visible.
   */
  public async expectLoaded(): Promise<void> {
    await this.expectHeading(/playwright enables reliable end-to-end testing/i);
  }

  /**
   * Starts the Get started flow from the hero section.
   */
  public async openGetStarted(): Promise<void> {
    await this.getGetStartedLink().click();
  }

  private getGetStartedLink() {
    return this.getByRole('link', 'Get started');
  }
}