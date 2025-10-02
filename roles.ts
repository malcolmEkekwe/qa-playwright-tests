// Example file defining different user roles for tests.

export interface UserRole {
  email: string;
  password: string;
}

export const roles = {
  standardUser: {
    email: process.env.TEST_USER_EMAIL || 'user@example.com',
    password: process.env.TEST_USER_PASSWORD || 'password',
  },
  adminUser: {
    email: process.env.ADMIN_USER_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_USER_PASSWORD || 'adminpassword',
  },
} as const;