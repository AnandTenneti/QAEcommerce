import { test, expect } from "../fixtures";
import { HomePage } from "../../pages/HomePage";
import { HeaderPage } from "../../pages/HeaderPage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
import testData from "../../testdata/testData_1.json";
let homePage;
let headerPage;
let productDetailsPage;

test("Verify product details", async ({
  loggedInPage,
  homePage,
  productDetailsPage,
  headerPage,
}) => {
  const productName = "Sample Trouser Name";
  await expect(loggedInPage).toHaveURL("/ecommerce");
  await homePage.clickOnProduct(productName);
  await loggedInPage.waitForTimeout(3000);
  await expect
    .soft(productDetailsPage.getProductName())
    .toHaveText(productName);
  await expect
    .soft(productDetailsPage.getProductDescription())
    .toHaveText("A sample description for the product.");
  await expect.soft(productDetailsPage.getProductPrice()).toHaveText("$72.00");
  await productDetailsPage.clickOnBackToProducts();
  await headerPage.logout();
});

test("[@end2end] Verify product details-1", async ({
  loggedInPage,
  homePage,
  productDetailsPage,
  cartPage,
  headerPage,
  checkOutPage,
}) => {
  const productName = "Sample Trouser Name";
  const checkOutCompleteMessageText = "Thank you for your order!";
  await expect(loggedInPage).toHaveURL("/ecommerce");

  await test.step("Validate product details", async () => {
    await homePage.clickOnProduct(productName);
    await expect(productDetailsPage.getProductName()).toBeVisible();
    await expect(productDetailsPage.getProductName()).toHaveText(productName);
    await expect(productDetailsPage.getProductDescription()).toHaveText(
      "A sample description for the product.",
    );
    await expect(productDetailsPage.getProductPrice()).toHaveText("$72.00");
  });
  await test.step("Update product quantity and add to cart", async () => {
    await productDetailsPage.increaseProductQuantity();
    await expect(productDetailsPage.getProductQuantity()).toHaveValue("2");
    await productDetailsPage.addProductToCart();
  });
  await test.step("Validate cart pricing", async () => {
    await productDetailsPage.clickOnBackToProducts();
    await headerPage.clickOnCartButton();
    const quantity = await cartPage.getQuantityValue();
    const price = await cartPage.getPriceValue();
    const total = await cartPage.getTotalValue();
    expect(quantity * price).toBe(total);
  });
  await test.step("Checkout process", async () => {
    await cartPage.clickOnProductCheckout();

    await checkOutPage.fillCheckOutDetails("John", "Doe", "560043");
    expect(checkOutPage.reviewProductName()).toHaveText(productName);
    expect(checkOutPage.reviewProductQuantity()).toHaveText("2");
    await checkOutPage.clickOnFinishButton();
    await expect(checkOutPage.checkoutComplete()).toBeVisible();
    await expect(checkOutPage.checkoutComplete()).toHaveText(
      checkOutCompleteMessageText,
    );
  });
  await headerPage.logout();
});
