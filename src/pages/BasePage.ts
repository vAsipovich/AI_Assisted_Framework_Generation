// path: src/pages/BasePage.ts
import { expect, type Locator, type Page } from '@playwright/test';

type RoleName = Parameters<Page['getByRole']>[0];

/**
 * Provides shared behaviors for all page objects.
 */
export class BasePage {
  protected readonly page: Page;

  /**
   * Creates a page object bound to the current Playwright page.
   *
   * @param page The Playwright page instance.
   */
  public constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the provided relative path.
   *
   * @param path The relative application path.
   */
  public async navigate(path = '/'): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  /**
   * Waits for the page to reach the complete ready state.
   */
  public async waitForReadyState(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verifies that the current URL contains the expected value.
   *
   * @param value The URL fragment to verify.
   */
  public async expectUrlContains(value: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(value));
  }

  /**
   * Verifies that a heading is visible on the page.
   *
   * @param name The accessible heading name.
   */
  public async expectHeading(name: string | RegExp): Promise<void> {
    await expect(this.getByRole('heading', name)).toBeVisible();
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