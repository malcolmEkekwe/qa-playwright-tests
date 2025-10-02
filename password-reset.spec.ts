import { test, expect } from '@playwright/test';

// Test: requesting a password reset sends email
test('auth: request password reset', async ({ page }) => {
  await page.goto('/forgot-password');
  await page.getByLabel('Email').fill(process.env.TEST_USER_EMAIL || 'user@example.com');
  await page.getByRole('button', { name: /send reset/i }).click();
  // Confirm that a confirmation message appears
  await expect(page.getByText(/check your email/i)).toBeVisible();
});