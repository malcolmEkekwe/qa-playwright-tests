// Utility functions for generating random test data.

export function randomEmail(prefix = 'user'): string {
  const timestamp = Date.now();
  return `${prefix}${timestamp}@example.com`;
}

export function randomString(length = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}