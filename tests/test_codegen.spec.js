import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('a');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('a');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Sony vaio i7' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});