import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly resultCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search products');
    this.resultCards = page.locator('.product-card');
  }

  async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.page.keyboard.press('Enter');
  }

  async expectResults(count: number) {
    await expect(this.resultCards).toHaveCount(count);
  }
}