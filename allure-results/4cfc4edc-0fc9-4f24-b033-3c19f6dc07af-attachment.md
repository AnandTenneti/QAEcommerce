# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home/HomePageTest.spec.js >> Favorite Product Tests >> [@cart] Verify product is added to cart successfully 
- Location: tests/home/HomePageTest.spec.js:37:7

# Error details

```
TypeError: cartPage.clickOnRemoveButton is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link [ref=e6] [cursor=pointer]:
        - /url: /ecommerce
        - img [ref=e7]
        - generic [ref=e8]: (Practice Site)
    - generic [ref=e10]:
      - heading [level=3] [ref=e11]: Your Cart
      - generic [ref=e12]:
        - heading [level=1] [ref=e13]: Your cart is empty.
        - button [ref=e14] [cursor=pointer]:
          - img [ref=e15]
          - generic [ref=e17]: Continue Shopping
    - contentinfo [ref=e18]:
      - generic [ref=e20]:
        - generic [ref=e21]:
          - link [ref=e22] [cursor=pointer]:
            - /url: https://qabrains.com
            - img [ref=e23]
          - paragraph [ref=e24]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e25]:
          - heading [level=3] [ref=e26]: QA Topics
          - list [ref=e27]:
            - listitem [ref=e28]:
              - link [ref=e29] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
                - text: Web Testing
            - listitem [ref=e30]:
              - link [ref=e31] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
                - text: Interview Questions
            - listitem [ref=e32]:
              - link [ref=e33] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
                - text: Testing Framework
            - listitem [ref=e34]:
              - link [ref=e35] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e37]
        - generic [ref=e39]:
          - heading [level=3] [ref=e40]: Quick Links
          - list [ref=e41]:
            - listitem [ref=e42]:
              - link [ref=e43] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
                - text: Discussion
            - listitem [ref=e44]:
              - link [ref=e45] [cursor=pointer]:
                - /url: https://qabrains.com/about
                - text: About Us
            - listitem [ref=e46]:
              - link [ref=e47] [cursor=pointer]:
                - /url: https://qabrains.com/terms
                - text: Terms & Conditions
            - listitem [ref=e48]:
              - link [ref=e49] [cursor=pointer]:
                - /url: https://qabrains.com/policy
                - text: Privacy Policy
        - generic [ref=e50]:
          - heading [level=3] [ref=e51]: Follow Us
          - generic [ref=e52]:
            - link [ref=e53] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e54]
            - link [ref=e56] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e57]
            - link [ref=e60] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e61]
          - generic [ref=e64]:
            - heading [level=3] [ref=e65]: For Support
            - link [ref=e66] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
              - text: support@qabrains.com
      - paragraph [ref=e68]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e69]:
        - img [ref=e71]
        - generic [ref=e74]: Added to cart
  - alert [ref=e75]
  - dialog "Are you sure you want to log out?" [ref=e77]:
    - generic [ref=e78]:
      - heading "Are you sure you want to log out?" [level=2] [ref=e79]
      - paragraph [ref=e80]: You're about to log out. Continue?
    - generic [ref=e81]:
      - button "Close" [ref=e82] [cursor=pointer]
      - button "Logout" [active] [ref=e83] [cursor=pointer]
    - button "Close" [ref=e84] [cursor=pointer]:
      - img
      - generic [ref=e85]: Close
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
  47 |     const removeButtonText = await homePage.getRemoveButton(productName);
  48 |     await expect(removeButtonText).toBeVisible();
  49 |     await headerPage.clickOnCartButton();
> 50 |     await cartPage.clickOnRemoveButton(productName);
     |                    ^ TypeError: cartPage.clickOnRemoveButton is not a function
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