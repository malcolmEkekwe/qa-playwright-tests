import { test, expect } from '@playwright/test';

// Smoke test: search returns relevant results
test('@smoke catalog: search for an existing product', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search products').fill('laptop');
  await page.keyboard.press('Enter');
  // Expect at least one search result to contain the keyword
  const results = page.locator('.product-card');
  await expect(results.first()).toContainText(/laptop/i);
});

// Test: searching for a non‑existent product shows empty state
test('catalog: search for non-existent product shows no results message', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search products').fill('nosuchproduct');
  await page.keyboard.press('Enter');
  await expect(page.getByText(/no products found/i)).toBeVisible();
});