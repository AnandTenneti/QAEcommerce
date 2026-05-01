import { test, expect } from "@playwright/test";
import { LoginPage } from "@pages/LoginPage";
import { HeaderPage } from "@pages/HeaderPage";
import testData from "@testdata/users.json";

testData.forEach(({ username, password }) => {
  test(`Login test for ${username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const headerPage = new HeaderPage(page);
    await page.goto("/ecommerce/login");
    await loginPage.login(username, password);
    await expect(page).toHaveURL("/ecommerce");
    await headerPage.logout();
  });
});
