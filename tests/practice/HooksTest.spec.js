import {test, expect} from '@playwright/test';

let page;

test.beforeEach(async ({browser}) => {
    page = await browser.newPage();
    console.log('Before Each Hook: Navigating to login page');
    await page.goto('/ecommerce/login');
    
});
test.afterEach(async () => {
  await page.close();
});

test('Verify Hooks Test', async () => {
    console.log('This is a test to verify hooks');
    await expect(page).toHaveURL('/ecommerce/login');
    await page.waitForTimeout(2000);
});