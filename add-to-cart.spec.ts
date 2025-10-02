import { test, expect } from '@playwright/test';

// Smoke test: add an item to the cart
test('@smoke cart: add in-stock item to cart', async ({ page }) => {
  await page.goto('/');
  // Click the first product add to cart button
  await page.locator('.product-card').first().getByRole('button', { name: /add to cart/i }).click();
  // Navigate to cart page
  await page.getByRole('link', { name: /cart/i }).click();
  // Verify cart has one item
  await expect(page.locator('.cart-item')).toHaveCount(1);
});