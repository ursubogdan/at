const { test, expect } = require('@playwright/test');

test('example.com redirection and content validation', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.locator('h1')).toHaveText('Example Domain');
  await expect(page.locator('p')).toContainText('illustrative examples');

  const moreInfo = page.locator('a');
  await expect(moreInfo).toHaveText('More information...');
  await moreInfo.click();

  await expect(page).toHaveURL(/iana.org/);
  await expect(page).toHaveTitle(/IANA/);
});
