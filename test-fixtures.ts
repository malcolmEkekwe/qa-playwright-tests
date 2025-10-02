import { test as base } from '@playwright/test';

// Extend the base test with custom fixtures if needed.

type TestFixtures = {
  // Example: loggedInPage fixture could perform login and return a page ready for testing
};

export const test = base.extend<TestFixtures>({
  // Define fixtures here. For v1 we keep it lean and do not implement a login fixture.
});

export { expect } from '@playwright/test';