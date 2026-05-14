# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home/HomePageTest.spec.js >> Home Page Tests >> Verify 9 products are displayed on the home page
- Location: tests/home/HomePageTest.spec.js:5:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://practice.qabrains.com/ecommerce"
Received: "https://practice.qabrains.com/ecommerce/login"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    3 × unexpected value "https://practice.qabrains.com/ecommerce/login"

```

# Test source

```ts
  1  | import { OrderByOptions } from "@constants/OrderByOptions";
  2  | import { test, expect } from "@hooks/testHooks";
  3  | 
  4  | test.describe("Home Page Tests", () => {
  5  |   test("Verify 9 products are displayed on the home page", async ({
  6  |     loggedInPage,
  7  |     homePage,
  8  |   }) => {
> 9  |     await expect(loggedInPage).toHaveURL("/ecommerce");
     |                                ^ Error: expect(page).toHaveURL(expected) failed
  10 |     await expect(homePage.getProducts()).toHaveCount(9);
  11 |   });
  12 | 
  13 |   test("[@regression] Verify product list is sorted correctly based on selected option", async ({
  14 |     loggedInPage,
  15 |     homePage,
  16 |   }) => {
  17 |     let prices;
  18 |     await test.step("Select 'Price High to Low' sorting option", async () => {
  19 |       await homePage.selectOrderByOption(OrderByOptions.PRICE_HIGH_TO_LOW);
  20 |     });
  21 |     await loggedInPage.waitForTimeout(3000);
  22 |     await test.step("Capture all product prices", async () => {
  23 |       prices = await homePage.getAllPrices();
  24 |     });
  25 |     await test.step("Verify prices are sorted in descending order", async () => {
  26 |       for (let i = 0; i < prices.length - 1; i++) {
  27 |         expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
  28 |       }
  29 |     });
  30 |   });
  31 | });
  32 | 
  33 | test.describe("Favorite Product Tests", () => {
  34 |   test.afterEach(async ({ headerPage }) => {
  35 |     await headerPage.logout();
  36 |   });
  37 |   test("[@cart] Verify product is added to cart successfully ", async ({
  38 |     loggedInPage,
  39 |     headerPage,
  40 |     homePage,
  41 |     cartPage,
  42 |   }) => {
  43 |     const productName = "Sample Trouser Name";
  44 |     const productPrice = "$72.00";
  45 |     await homePage.addProductToCart(productName, productPrice);
  46 |     await loggedInPage.waitForTimeout(3000);
  47 |     const removeButtonText = await homePage.getRemoveButton(productName);
  48 |     await expect(removeButtonText).toBeVisible();
  49 |     await headerPage.clickOnCartButton();
  50 |     await cartPage.removeFromCart(productName,productPrice);
  51 |   });
  52 | 
  53 |   test("[@favorites] Verify clicking on favorites", async ({
  54 |     loggedInPage,
  55 |     homePage,
  56 |     headerPage,
  57 |   }) => {
  58 |     await homePage.markProductAsFavorite("Sample Trouser Name");
  59 |     await headerPage.clickOnFavorite();
  60 |     await expect(loggedInPage).toHaveURL(/favorite/);
  61 |     await loggedInPage.waitForTimeout(3000);
  62 |   });
  63 | 
  64 |   test("[@smoke] Verify product details page is displayed when a product is clicked", async ({
  65 |     loggedInPage,
  66 |     headerPage,
  67 |     homePage,
  68 |     productDetailsPage,
  69 |   }) => {
  70 |     let expectedProductName;
  71 |     await test.step("Click on a product from the list", async () => {
  72 |       expectedProductName = await homePage.getProductNameByIndex(1);
  73 |       await homePage.clickOnProductByIndex(1);
  74 |     });
  75 |     await test.step("Verify user is navigated to product details page", async () => {
  76 |       await expect(loggedInPage).toHaveURL(/product-details/);
  77 |     });
  78 |     await test.step("Verify correct product title is displayed ", async () => {
  79 |       await expect(productDetailsPage.getProductName()).toHaveText(
  80 |         expectedProductName,
  81 |       );
  82 |     });
  83 |   });
  84 | });
  85 | 
```