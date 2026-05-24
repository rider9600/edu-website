import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e/tests',
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    viewport: { width: 1280, height: 720 },
  },
});
