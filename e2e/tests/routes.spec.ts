import { test, expect } from '@playwright/test';

const routes = ['/', '/probability', '/statistics', '/visualizations'];

for (const route of routes) {
  test(`route ${route} responds`, async ({ page }) => {
    const resp = await page.goto(route);
    expect(resp).not.toBeNull();
    expect(resp && resp.ok()).toBeTruthy();
    await expect(page).toHaveURL(new RegExp(route === '/' ? '^/$' : `${route}`));
  });
}
