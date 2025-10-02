import { test, expect } from '@playwright/test';

// Test: applying a category filter updates product list
test('catalog: applying a category filter updates results', async ({ page }) => {
  await page.goto('/');
  // Open filter menu and select a category
  await page.getByRole('button', { name: /filter/i }).click();
  await page.getByLabel('Category').selectOption('electronics');
  await expect(page.locator('.product-card')).toHaveCountGreaterThan(0);
});

// Test: sorting by price high to low orders products correctly
test('catalog: sort by price (high to low)', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('combobox', { name: /sort by/i }).selectOption('price_desc');
  const prices = await page.locator('.product-card .price').allInnerTexts();
  const numericPrices = prices.map((p) => parseFloat(p.replace(/[^0-9.]/g, '')));
  // Verify the array is sorted descending
  for (let i = 0; i < numericPrices.length - 1; i++) {
    expect(numericPrices[i]).toBeGreaterThanOrEqual(numericPrices[i + 1]);
  }
});