import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: /checkout/i });
    this.cartItems = page.locator('.cart-item');
  }

  async goto() {
    await this.page.goto('/cart');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }
}