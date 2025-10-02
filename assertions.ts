import { expect } from '@playwright/test';

// Custom assertion wrappers can live here. For v1 we keep it minimal.

/**
 * Assert that a list of numbers is sorted in descending order.
 */
export function expectSortedDesc(numbers: number[]) {
  for (let i = 0; i < numbers.length - 1; i++) {
    expect(numbers[i]).toBeGreaterThanOrEqual(numbers[i + 1]);
  }
}