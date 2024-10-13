import { test, expect } from '@playwright/test';
const {POManager} = require('../Pages/POManager')
/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
test('@Web US1 The result grid is displayed after press search button with Sail to and Duration fields filled', async({page}) =>{
  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await launchPage.goTo();  
  await launchPage.selectSailTo("");
}
)
