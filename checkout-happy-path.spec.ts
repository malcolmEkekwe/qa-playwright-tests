import { test, expect } from '@playwright/test';

// Test: complete checkout flow successfully
test('@smoke cart: checkout happy path', async ({ page }) => {
  await page.goto('/');
  // Add first product to cart
  await page.locator('.product-card').first().getByRole('button', { name: /add to cart/i }).click();
  await page.getByRole('link', { name: /cart/i }).click();
  // Proceed to checkout
  await page.getByRole('button', { name: /checkout/i }).click();
  // Fill shipping information (dummy data)
  await page.getByLabel('Name').fill('Test User');
  await page.getByLabel('Address').fill('123 Test Street');
  await page.getByLabel('City').fill('Lagos');
  await page.getByLabel('Postal Code').fill('100001');
  await page.getByLabel('Country').selectOption('NG');
  // Continue to payment
  await page.getByRole('button', { name: /continue to payment/i }).click();
  // Fill payment details (use test card information if sandbox)
  await page.getByLabel('Card Number').fill('4242424242424242');
  await page.getByLabel('Expiry Date').fill('12/26');
  await page.getByLabel('CVC').fill('123');
  // Place the order
  await page.getByRole('button', { name: /place order/i }).click();
  // Expect order confirmation message
  await expect(page.getByText(/thank you for your purchase/i)).toBeVisible();
});