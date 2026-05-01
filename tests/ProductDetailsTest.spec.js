import { test, expect } from "./fixtures";
import { HomePage } from "../pages/HomePage";
import { HeaderPage } from "../pages/HeaderPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import testData from "../testdata/testData_1.json";
let homePage;
let headerPage;
let productDetailsPage;

test("Verify product details", async ({
  loggedInPage,
  homePage,
  productDetailsPage,
  headerPage,
}) => {
  await expect(loggedInPage).toHaveURL("/ecommerce");
  //   const productName = await homePage.getProductNameByIndex(0);
  //   const productDescription = await homePage.getProductDescriptionByIndex(0);
  //   const productPrice = await homePage.getProductPriceByIndex(0);

  await homePage.clickOnProduct("Sample Trouser Name");
  await loggedInPage.waitForTimeout(3000);
  await expect(productDetailsPage.getProductName()).toHaveText(
    "Sample Trouser Name",
  );
  await expect(productDetailsPage.getProductDescription()).toHaveText(
    "A sample description for the product.",
  );
  await expect(productDetailsPage.getProductPrice()).toHaveText("$72.00");
  await productDetailsPage.clickOnBackToProducts();
  await headerPage.logout();

  //   const detailsProductName = await productDetailsPage.getProductName();
  //   const detailsProductDescription =
  //     await productDetailsPage.getProductDescription();

  //   expect(detailsProductName.trim()).toBe(productName.trim());
  //   expect(detailsProductDescription.trim()).toBe(productDescription.trim());

  //   headerPage.clickOnCartButton();
});

test.only("Verify product details-1", async ({
  loggedInPage,
  homePage,
  productDetailsPage,
  headerPage,
}) => {
  await expect(loggedInPage).toHaveURL("/ecommerce");

  await homePage.clickOnProduct("Sample Trouser Name");
  await loggedInPage.waitForTimeout(3000);
  await expect(productDetailsPage.getProductName()).toHaveText(
    "Sample Trouser Name",
  );
  await expect(productDetailsPage.getProductDescription()).toHaveText(
    "A sample description for the product.",
  );
  await expect(productDetailsPage.getProductPrice()).toHaveText("$72.00");
  await productDetailsPage.increaseProductQuantity();
  await expect(productDetailsPage.getProductQuantity()).toHaveValue("2");
  // await productDetailsPage.decreaseProductQuantity();
  // await expect(productDetailsPage.getProductQuantity()).toHaveValue("1");
  await productDetailsPage.addProductToCart();
  await productDetailsPage.clickOnBackToProducts();
  await headerPage.clickOnCartButton();
  await loggedInPage.waitForTimeout(3000);
  await headerPage.logout();
});
