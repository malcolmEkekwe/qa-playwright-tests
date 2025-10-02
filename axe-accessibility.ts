// Optional accessibility helper using axe-core/playwright.
// This helper is not imported by default in tests to keep v1 lean.

import AxeBuilder from '@axe-core/playwright';
import { expect, Page } from '@playwright/test';

export async function checkAccessibility(page: Page) {
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
}