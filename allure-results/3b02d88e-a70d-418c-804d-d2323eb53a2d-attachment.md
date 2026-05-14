# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home/HomePageTest.spec.js >> Favorite Product Tests >> [@smoke] Verify product details page is displayed when a product is clicked
- Location: tests/home/HomePageTest.spec.js:61:7

# Error details

```
TypeError: (0 , _testHooks.expect) is not a function
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
    - generic [ref=e11]:
      - button [ref=e12] [cursor=pointer]:
        - img [ref=e13]
        - text: Back to Products
      - generic [ref=e15]:
        - generic [ref=e16]:
          - img [ref=e17]
          - button [ref=e18]:
            - button [ref=e19] [cursor=pointer]:
              - img [ref=e20]
        - generic [ref=e22]:
          - heading [level=1] [ref=e23]: Sample Shoe Name
          - paragraph [ref=e24]: A sample description for the product.
          - generic [ref=e25]:
            - heading [level=2] [ref=e26]: Quantity
            - generic [ref=e27]:
              - button [ref=e28] [cursor=pointer]: −
              - textbox [ref=e29]: "1"
              - button [ref=e30] [cursor=pointer]: +
          - generic [ref=e31]: $89.00
          - button [ref=e33] [cursor=pointer]: Add to cart
    - contentinfo [ref=e34]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - link [ref=e38] [cursor=pointer]:
            - /url: https://qabrains.com
            - img [ref=e39]
          - paragraph [ref=e40]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e41]:
          - heading [level=3] [ref=e42]: QA Topics
          - list [ref=e43]:
            - listitem [ref=e44]:
              - link [ref=e45] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
                - text: Web Testing
            - listitem [ref=e46]:
              - link [ref=e47] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
                - text: Interview Questions
            - listitem [ref=e48]:
              - link [ref=e49] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
                - text: Testing Framework
            - listitem [ref=e50]:
              - link [ref=e51] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e53]
        - generic [ref=e55]:
          - heading [level=3] [ref=e56]: Quick Links
          - list [ref=e57]:
            - listitem [ref=e58]:
              - link [ref=e59] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
                - text: Discussion
            - listitem [ref=e60]:
              - link [ref=e61] [cursor=pointer]:
                - /url: https://qabrains.com/about
                - text: About Us
            - listitem [ref=e62]:
              - link [ref=e63] [cursor=pointer]:
                - /url: https://qabrains.com/terms
                - text: Terms & Conditions
            - listitem [ref=e64]:
              - link [ref=e65] [cursor=pointer]:
                - /url: https://qabrains.com/policy
                - text: Privacy Policy
        - generic [ref=e66]:
          - heading [level=3] [ref=e67]: Follow Us
          - generic [ref=e68]:
            - link [ref=e69] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e70]
            - link [ref=e72] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e73]
            - link [ref=e76] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e77]
          - generic [ref=e80]:
            - heading [level=3] [ref=e81]: For Support
            - link [ref=e82] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
              - text: support@qabrains.com
      - paragraph [ref=e84]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e85]
  - dialog "Are you sure you want to log out?" [ref=e87]:
    - generic [ref=e88]:
      - heading "Are you sure you want to log out?" [level=2] [ref=e89]
      - paragraph [ref=e90]: You're about to log out. Continue?
    - generic [ref=e91]:
      - button "Close" [ref=e92] [cursor=pointer]
      - button "Logout" [active] [ref=e93] [cursor=pointer]
    - button "Close" [ref=e94] [cursor=pointer]:
      - img
      - generic [ref=e95]: Close
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
  35 |   test.afterEach(async ({ headerPage }) => {
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
> 73 |       await expect(loggedInPage).toHaveURL(/product-details/);
     |                   ^ TypeError: (0 , _testHooks.expect) is not a function
  74 |     });
  75 |     await test.step("Verify correct product title is displayed ", async()=>{
  76 |       await expect(productDetailsPage.getProductName()).toHaveText(expectedProductName)
  77 |     })
  78 |   });
  79 | });
  80 | 
```