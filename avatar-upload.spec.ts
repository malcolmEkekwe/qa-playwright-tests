import { test, expect } from '@playwright/test';
import path from 'path';

// Test: uploading a valid avatar image
test('profile: upload valid avatar', async ({ page }) => {
  await page.goto('/profile');
  // Path to a sample avatar in this repository; in real tests this would be replaced
  const avatarPath = path.resolve(__dirname, '../../fixtures/sample-avatar.png');
  await page.setInputFiles('input[type="file"]', avatarPath);
  await expect(page.getByAltText(/profile avatar/i)).toBeVisible();
});

// Test: uploading an invalid file type shows validation message
test('profile: upload invalid file type shows error', async ({ page }) => {
  await page.goto('/profile');
  const invalidPath = path.resolve(__dirname, '../../fixtures/invalid-file.txt');
  await page.setInputFiles('input[type="file"]', invalidPath);
  await expect(page.getByText(/unsupported file type/i)).toBeVisible();
});