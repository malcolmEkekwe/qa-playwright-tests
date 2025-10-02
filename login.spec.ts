import { test, expect } from '@playwright/test';

// Smoke test: successful login
test('@smoke auth: login with valid credentials', async ({ page }) => {
  await page.goto('/login');
  // Fill in user credentials
  await page.getByLabel('Email').fill(process.env.TEST_USER_EMAIL || 'user@example.com');
  await page.getByLabel('Password').fill(process.env.TEST_USER_PASSWORD || 'password');
  await page.getByRole('button', { name: 'Login' }).click();
  // Assert that user is redirected to dashboard
  await expect(page).toHaveURL(/.*dashboard/);
});

// Negative test: invalid password shows error
test('auth: login with invalid password shows error', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('invalid@example.com');
  await page.getByLabel('Password').fill('wrongpassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText(/invalid credentials/i)).toBeVisible();
});