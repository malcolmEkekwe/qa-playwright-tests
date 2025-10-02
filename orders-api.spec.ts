import { test, expect, request } from '@playwright/test';

// Example API test demonstrating Playwright's request API
test('api: fetch order details returns expected structure', async () => {
  const apiContext = await request.newContext({
    baseURL: process.env.API_BASE_URL || process.env.BASE_URL || 'https://example.com',
  });
  const response = await apiContext.get('/api/orders/12345');
  expect(response.ok()).toBeTruthy();
  const json = await response.json();
  expect(json).toHaveProperty('orderId');
  expect(json).toHaveProperty('status');
});