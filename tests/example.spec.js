const { test, expect } = require('@playwright/test');

test('homepage has title and gets content', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  const heading = await page.textContent('h1');
  expect(heading).toBe('Example Domain');
});
