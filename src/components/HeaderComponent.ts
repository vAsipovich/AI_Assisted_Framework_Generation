// path: src/components/HeaderComponent.ts
import type { Page } from '@playwright/test';

import { BaseComponent } from './BaseComponent';

/**
 * Models the global header navigation.
 */
export class HeaderComponent extends BaseComponent {
  /**
   * Creates a header component object.
   *
   * @param page The Playwright page instance.
   */
  public constructor(page: Page) {
    super(page);
  }

  /**
   * Opens the documentation page from the header.
   */
  public async openDocs(): Promise<void> {
    await this.getDocsLink().click();
  }

  /**
   * Verifies that the documentation link is visible in the header.
   */
  public async expectDocsLinkVisible(): Promise<void> {
    await this.getDocsLink().waitFor({ state: 'visible' });
  }

  private getDocsLink() {
    return this.getByRole('link', 'Docs');
  }
}