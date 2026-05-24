import { test, expect } from '@playwright/test';

const routes = ['/', '/probability', '/statistics', '/visualizations'];

for (const route of routes) {
  test(`route ${route} responds`, async ({ page }) => {
    const resp = await page.goto(route);
    expect(resp).not.toBeNull();
    expect(resp && resp.ok()).toBeTruthy();
    // Match route at the end of the full URL. For '/' ensure URL ends with '/'.
    const expected = route === '/' ? /\/$/ : new RegExp(`${route}$`);
    await expect(page).toHaveURL(expected);
  });
}
