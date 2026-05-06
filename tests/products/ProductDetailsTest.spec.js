import { test, expect } from "@hooks/testHooks";
import testData from "@testdata/products.json";

test("Verify product details", async ({
  loggedInPage,
  homePage,
  productDetailsPage,
  headerPage,
}) => {
  const { name, description, price } = testData.product[0];
  await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  await test.step("Select a product by name and click on it", async () => {
    await homePage.clickOnProduct(name);
  });
  await test.step("Validate product details", async () => {
    await loggedInPage.waitForTimeout(3000);
    await expect(productDetailsPage.getProductName()).toHaveText(name);
    await expect(productDetailsPage.getProductDescription()).toHaveText(
      description,
    );
    await expect(productDetailsPage.getProductPrice()).toHaveText(price);
  });
  await test.step("Navigate back to products page", async () => {
    await productDetailsPage.clickOnBackToProducts();
    await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  });
  await test.step("Logout from the application", async () => {
    await headerPage.logout();
  });
});

test("Verify product details-1", async ({
  loggedInPage,
  homePage,
  productDetailsPage,
  headerPage,
}) => {
  const { name, description, price } = testData.product[0];
  await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  await test.step("Select a product by name and click on it", async () => {
    await homePage.clickOnProduct(name);
  });
  await test.step("Validate product details", async () => {
    await loggedInPage.waitForTimeout(3000);
    await expect(productDetailsPage.getProductName()).toHaveText(name);
    await expect(productDetailsPage.getProductDescription()).toHaveText(
      description,
    );
    await expect(productDetailsPage.getProductPrice()).toHaveText(price);
  });
  await test.step("Increase product quantity and validate", async () => {
    await productDetailsPage.increaseProductQuantity();
    await expect(productDetailsPage.getProductQuantity()).toHaveValue("2");
  });
  await test.step("Add product to cart", async () => {
    await productDetailsPage.addProductToCart();
  });
  // await productDetailsPage.decreaseProductQuantity();
  // await expect(productDetailsPage.getProductQuantity()).toHaveValue("1");
  await test.step("Navigate back to products page", async () => {
    await productDetailsPage.clickOnBackToProducts();
    await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  });
  await test.step("Click on cart button", async () => {
    await headerPage.clickOnCartButton();
    await loggedInPage.waitForTimeout(3000);
  });
  await test.step("Logout from the application", async () => {
    await headerPage.logout();
  });
});
