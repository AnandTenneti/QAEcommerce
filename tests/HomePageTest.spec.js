import { OrderByOptions } from "../constants/OrderByOptions";
import { test, expect } from "./fixtures";
import { HomePage } from "../pages/HomePage";
import { HeaderPage } from "../pages/HeaderPage";
import { CartPage } from "../pages/CartPage";

test.describe("Home Page Tests", () => {
  test.afterEach(async ({ headerPage }) => {
    await headerPage.logout();
  });
  test("Verify 9 products are displayed on the home page", async ({
    loggedInPage,
    headerPage,
    homePage,
  }) => {
    await expect(loggedInPage).toHaveURL("/ecommerce");
    await expect(homePage.getProducts()).toHaveCount(9);
  });

  test("[@regression] Verify product list is sorted correctly based on selected option", async ({
    loggedInPage,
    homePage,
  }) => {
    let prices;
    await test.step("Select 'Price High to Low' sorting option", async () => {
      await homePage.selectOrderByOption(OrderByOptions.PRICE_HIGH_TO_LOW);
    });
    await loggedInPage.waitForTimeout(3000);
    await test.step("Capture all product prices", async () => {
      prices = await homePage.getAllPrices();
    });
    await test.step("Verify prices are sorted in descending order", async () => {
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
      }
    });
  });
});

test.describe("Favorite Product Tests", () => {
  test.afterEach(async ({ headerPage }) => {
    await headerPage.logout();
  });
  test("[@cart] Verify product is added to cart successfully ", async ({
    loggedInPage,
    headerPage,
    homePage,
    cartPage,
  }) => {
    const productName = "Sample Trouser Name";
    const productPrice = "$72.00";
    await homePage.addProductToCart(productName, productPrice);
    await loggedInPage.waitForTimeout(3000);
    const buttonTextVisible = await homePage.verifyButtonText();
    expect(buttonTextVisible).toBeTruthy();
    await headerPage.clickOnCartButton();
    await cartPage.clickOnRemove();
  });

  test("[@favorites] Verify clicking on favorites", async ({loggedInPage,homePage, headerPage})=>{
      await homePage.markProductAsFavorite("Sample Trouser Name");
      await headerPage.clickOnFavorite();
      await expect(loggedInPage).toHaveURL(/favorite/);
      await loggedInPage.waitForTimeout(3000);
    });

  test("[@smoke] Verify product details page is displayed when a product is clicked", async ({
    loggedInPage,
    headerPage,
    homePage,
    productDetailsPage
  }) => {
    let expectedProductName;
    await test.step("Click on a product from the list", async () => {
      expectedProductName = await homePage.getProductNameByIndex(1)
      await homePage.clickOnProductByIndex(1);
    });
    await test.step("Verify user is navigated to product details page", async () => {
      await expect(loggedInPage).toHaveURL(/product-details/);
    });
    await test.step("Verify correct product title is displayed ", async()=>{
      await expect(productDetailsPage.getProductName()).toHaveText(expectedProductName)
    })
  });
});
