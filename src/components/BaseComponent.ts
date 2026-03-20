// path: src/components/BaseComponent.ts
import { expect, type Locator, type Page } from '@playwright/test';

type RoleName = Parameters<Page['getByRole']>[0];

/**
 * Provides shared behaviors for reusable page components.
 */
export class BaseComponent {
  protected readonly page: Page;

  /**
   * Creates a component object bound to the current Playwright page.
   *
   * @param page The Playwright page instance.
   */
  public constructor(page: Page) {
    this.page = page;
  }

  /**
   * Verifies that a component element is visible by test id.
   *
   * @param testId The component test id.
   */
  public async expectVisibleByTestId(testId: string): Promise<void> {
    await expect(this.getByTestId(testId)).toBeVisible();
  }

  protected getByRole(role: RoleName, name: string | RegExp): Locator {
    return this.page.getByRole(role, { name });
  }

  protected getByLabel(label: string | RegExp): Locator {
    return this.page.getByLabel(label);
  }

  protected getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }
}