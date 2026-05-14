# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home/HomePageTest.spec.js >> Favorite Product Tests >> [@cart] Verify product is added to cart successfully 
- Location: tests/home/HomePageTest.spec.js:37:7

# Error details

```
TypeError: homePage.verifyButtonText is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
        - /url: /ecommerce
        - img "logo" [ref=e7]
        - generic [ref=e8]: (Practice Site)
    - generic [ref=e10]:
      - link "Back to home" [ref=e11] [cursor=pointer]:
        - /url: /
        - img [ref=e12]
        - text: Back to home
      - generic [ref=e14]:
        - heading "Login" [level=2] [ref=e15]
        - alert [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - heading "Accepted email:" [level=4] [ref=e19]
              - list [ref=e20]:
                - listitem [ref=e21]: test@qabrains.com
                - listitem [ref=e22]: practice@qabrains.com
                - listitem [ref=e23]: student@qabrains.com
            - generic [ref=e24]:
              - heading "Password:" [level=4] [ref=e25]
              - list [ref=e26]:
                - listitem [ref=e27]: Password123
                - listitem [ref=e28]: Password123
                - listitem [ref=e29]: Password123
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: Email*
              - textbox "Email*" [ref=e35]:
                - /placeholder: eg. user@user.com
            - generic [ref=e36]:
              - generic [ref=e37]: Password*
              - generic [ref=e38]:
                - textbox "Password*" [ref=e39]:
                  - /placeholder: "*******"
                - button [ref=e40] [cursor=pointer]:
                  - img [ref=e41]
          - button "Login" [ref=e47] [cursor=pointer]:
            - text: Login
            - img [ref=e48]
  - region "Notifications alt+T"
  - alert [ref=e50]
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
  9  |     await expect(loggedInPage).toHaveURL("/ecommerce");
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
> 47 |     const buttonTextVisible = await homePage.verifyButtonText();
     |                                              ^ TypeError: homePage.verifyButtonText is not a function
  48 |     expect(buttonTextVisible).toBeTruthy();
  49 |     await headerPage.clickOnCartButton();
  50 |     await cartPage.clickOnRemove();
  51 |   });
  52 | 
  53 |   test("[@favorites] Verify clicking on favorites", async ({loggedInPage,homePage, headerPage})=>{
  54 |       await homePage.markProductAsFavorite("Sample Trouser Name");
  55 |       await headerPage.clickOnFavorite();
  56 |       await expect(loggedInPage).toHaveURL(/favorite/);
  57 |       await loggedInPage.waitForTimeout(3000);
  58 |     });
  59 | 
  60 |   test("[@smoke] Verify product details page is displayed when a product is clicked", async ({
  61 |     loggedInPage,
  62 |     headerPage,
  63 |     homePage,
  64 |     productDetailsPage
  65 |   }) => {
  66 |     let expectedProductName;
  67 |     await test.step("Click on a product from the list", async () => {
  68 |       expectedProductName = await homePage.getProductNameByIndex(1)
  69 |       await homePage.clickOnProductByIndex(1);
  70 |     });
  71 |     await test.step("Verify user is navigated to product details page", async () => {
  72 |       await expect(loggedInPage).toHaveURL(/product-details/);
  73 |     });
  74 |     await test.step("Verify correct product title is displayed ", async()=>{
  75 |       await expect(productDetailsPage.getProductName()).toHaveText(expectedProductName)
  76 |     })
  77 |   });
  78 | });
  79 | 
```