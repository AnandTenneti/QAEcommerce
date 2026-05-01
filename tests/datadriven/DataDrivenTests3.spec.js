import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { HeaderPage } from "../../pages/HeaderPage";
import { HomePage } from "../../pages/HomePage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
import testData from "../../testdata/testData_1.json";

// pick first user
const { username, password } = testData.users[0];

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("/ecommerce/login");
  await loginPage.login(username, password);
});
test.afterEach(async ({page}) => {
  await page.close();
});
testData.products.forEach(({ name, description, price }) => {
  test(`Verify product details for ${name}`, async ({page}) => {
    const headerPage = new HeaderPage(page);
    const homePage = new HomePage(page);
    const productDetailsPage = new ProductDetailsPage(page);

    await expect(page).toHaveURL("/ecommerce");

    await homePage.clickOnProduct(name);

    await expect(productDetailsPage.getProductName()).toHaveText(name);
    await expect(productDetailsPage.getProductDescription()).toHaveText(description);
    await expect(productDetailsPage.getProductPrice()).toHaveText(price);

    await productDetailsPage.clickOnBackToProducts();
   
  });
});
