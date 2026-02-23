import { test, expect } from '@playwright/test';

test('Homepage Orange.md heading', async ({ page }) => {

await page.goto('https://www.orange.md/', { waitUntil: 'domcontentloaded' });

  // Închide cookie banner-ul
const agreeBtn = page.locator('#didomi-notice-agree-button');
if (await agreeBtn.isVisible()) {
  await agreeBtn.click();
  await expect(agreeBtn).toBeHidden({ timeout: 5000 });
}

  // Verifică heading-ul "Orange"
await expect(page).toHaveTitle(/Orange Moldova/);
});
