# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home/HomePageTest.spec.js >> Favorite Product Tests >> [@favorites] Verify clicking on favorites
- Location: tests/home/HomePageTest.spec.js:54:7

# Error details

```
TypeError: (0 , _testHooks.expect) is not a function
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
          - /url: /ecommerce
          - img "logo" [ref=e7]
          - generic [ref=e8]: (Practice Site)
        - generic [ref=e9]:
          - button [ref=e10] [cursor=pointer]:
            - img [ref=e11]
          - button "test@qabrains.com" [active] [ref=e13] [cursor=pointer]:
            - img [ref=e14]
            - generic [ref=e16]: test@qabrains.com
            - img [ref=e18]
    - generic [ref=e20]:
      - generic [ref=e21]:
        - heading "Favorites" [level=3] [ref=e22]
        - generic [ref=e23]:
          - paragraph [ref=e24]: Order by
          - combobox [ref=e25] [cursor=pointer]:
            - text: Select...
            - img
      - generic [ref=e28]:
        - button [ref=e29] [cursor=pointer]:
          - button [ref=e30]:
            - img [ref=e31]
        - link "Sample Trouser Name" [ref=e33] [cursor=pointer]:
          - /url: /ecommerce/product-details?id=4
          - img "Sample Trouser Name" [ref=e34]
        - link "Sample Trouser Name" [ref=e35] [cursor=pointer]:
          - /url: /ecommerce/product-details?id=4
        - link "A sample description for the product." [ref=e36] [cursor=pointer]:
          - /url: /ecommerce/product-details?id=4
        - generic [ref=e37]:
          - generic [ref=e38]: $72.00
          - button "Add to cart" [ref=e39] [cursor=pointer]
    - contentinfo [ref=e40]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - link "logo" [ref=e44] [cursor=pointer]:
            - /url: https://qabrains.com
            - img "logo" [ref=e45]
          - paragraph [ref=e46]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e47]:
          - heading "QA Topics" [level=3] [ref=e48]
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Web Testing" [ref=e51] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e52]:
              - link "Interview Questions" [ref=e53] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e54]:
              - link "Testing Framework" [ref=e55] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e56]:
              - link "See more" [ref=e57] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e59]
        - generic [ref=e61]:
          - heading "Quick Links" [level=3] [ref=e62]
          - list [ref=e63]:
            - listitem [ref=e64]:
              - link "Discussion" [ref=e65] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e66]:
              - link "About Us" [ref=e67] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e68]:
              - link "Terms & Conditions" [ref=e69] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e70]:
              - link "Privacy Policy" [ref=e71] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e72]:
          - heading "Follow Us" [level=3] [ref=e73]
          - generic [ref=e74]:
            - link [ref=e75] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e76]
            - link [ref=e78] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e79]
            - link [ref=e82] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e83]
          - generic [ref=e86]:
            - heading "For Support" [level=3] [ref=e87]
            - link "support@qabrains.com" [ref=e88] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e90]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e91]
```

# Test source

```ts
  1  | import { OrderByOptions } from "@constants/OrderByOptions";
  2  | import { test, expect } from "@hooks/testHooks";
  3  | 
  4  | test.describe("Home Page Tests", () => {
  5  |   test("Verify 9 products are displayed on the home page", async ({
  6  |     loggedInPage,
  7  |     headerPage,
  8  |     homePage,
  9  |   }) => {
  10 |     await expect(loggedInPage).toHaveURL("/ecommerce");
  11 |     await expect(homePage.getProducts()).toHaveCount(9);
  12 |   });
  13 | 
  14 |   test("[@regression] Verify product list is sorted correctly based on selected option", async ({
  15 |     loggedInPage,
  16 |     homePage,
  17 |   }) => {
  18 |     let prices;
  19 |     await test.step("Select 'Price High to Low' sorting option", async () => {
  20 |       await homePage.selectOrderByOption(OrderByOptions.PRICE_HIGH_TO_LOW);
  21 |     });
  22 |     await loggedInPage.waitForTimeout(3000);
  23 |     await test.step("Capture all product prices", async () => {
  24 |       prices = await homePage.getAllPrices();
  25 |     });
  26 |     await test.step("Verify prices are sorted in descending order", async () => {
  27 |       for (let i = 0; i < prices.length - 1; i++) {
  28 |         expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
  29 |       }
  30 |     });
  31 |   });
  32 | });
  33 | 
  34 | test.describe("Favorite Product Tests", () => {
> 35 |   test.afterEach(async ({ headerPage }) => {
     |        ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  36 |     await headerPage.logout();
  37 |   });
  38 |   test("[@cart] Verify product is added to cart successfully ", async ({
  39 |     loggedInPage,
  40 |     headerPage,
  41 |     homePage,
  42 |     cartPage,
  43 |   }) => {
  44 |     const productName = "Sample Trouser Name";
  45 |     const productPrice = "$72.00";
  46 |     await homePage.addProductToCart(productName, productPrice);
  47 |     await loggedInPage.waitForTimeout(3000);
  48 |     const buttonTextVisible = await homePage.verifyButtonText();
  49 |     expect(buttonTextVisible).toBeTruthy();
  50 |     await headerPage.clickOnCartButton();
  51 |     await cartPage.clickOnRemove();
  52 |   });
  53 | 
  54 |   test("[@favorites] Verify clicking on favorites", async ({loggedInPage,homePage, headerPage})=>{
  55 |       await homePage.markProductAsFavorite("Sample Trouser Name");
  56 |       await headerPage.clickOnFavorite();
  57 |       await expect(loggedInPage).toHaveURL(/favorite/);
  58 |       await loggedInPage.waitForTimeout(3000);
  59 |     });
  60 | 
  61 |   test("[@smoke] Verify product details page is displayed when a product is clicked", async ({
  62 |     loggedInPage,
  63 |     headerPage,
  64 |     homePage,
  65 |     productDetailsPage
  66 |   }) => {
  67 |     let expectedProductName;
  68 |     await test.step("Click on a product from the list", async () => {
  69 |       expectedProductName = await homePage.getProductNameByIndex(1)
  70 |       await homePage.clickOnProductByIndex(1);
  71 |     });
  72 |     await test.step("Verify user is navigated to product details page", async () => {
  73 |       await expect(loggedInPage).toHaveURL(/product-details/);
  74 |     });
  75 |     await test.step("Verify correct product title is displayed ", async()=>{
  76 |       await expect(productDetailsPage.getProductName()).toHaveText(expectedProductName)
  77 |     })
  78 |   });
  79 | });
  80 | 
```