import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage'
import {HeaderPage} from '../../pages/HeaderPage'

const testData = [
  { username: 'test@qabrains.com', password: 'Password123' },
  { username: 'practice@qabrains.com', password: 'Password123' },
  { username: 'student@qabrains.com', password: 'Password123' }
];
test.beforeEach(async ({ page }) => {
  // setup code here
  await page.goto('/ecommerce/login');
});

test.afterEach(async ({ page }) => {
  // setup code here
  await page.close();
});
testData.forEach(({ username, password }) => {
  test(`Login test for ${username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
        const headerPage = new HeaderPage(page);
        await loginPage.login(username, password);
        await expect(page).toHaveURL('/ecommerce');
        await headerPage.logout();
  });
});
