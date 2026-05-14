# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePageTest.spec.js >> Favorite Product Tests >> [@cart] Verify product is added to cart successfully 
- Location: tests/HomePageTest.spec.js:41:7

# Error details

```
TypeError: homePage.verifyButtonText is not a function
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
    - generic [ref=e9]:
      - generic [ref=e10]:
        - heading [level=3] [ref=e11]: Products
        - generic [ref=e12]:
          - paragraph [ref=e13]: Order by
          - combobox [ref=e14] [cursor=pointer]:
            - text: Select...
            - img
      - generic [ref=e15]:
        - generic [ref=e16]:
          - button [ref=e17] [cursor=pointer]:
            - button [ref=e18]:
              - img [ref=e19]
          - link [ref=e21] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
            - img [ref=e22]
          - link [ref=e23] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
            - text: Sample Shirt Name
          - link [ref=e24] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
            - text: A sample description for the product.
          - generic [ref=e25]:
            - generic [ref=e26]: $49.99
            - button [ref=e27] [cursor=pointer]: Add to cart
        - generic [ref=e28]:
          - button [ref=e29] [cursor=pointer]:
            - button [ref=e30]:
              - img [ref=e31]
          - link [ref=e33] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
            - img [ref=e34]
          - link [ref=e35] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
            - text: Sample Shoe Name
          - link [ref=e36] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
            - text: A sample description for the product.
          - generic [ref=e37]:
            - generic [ref=e38]: $89.00
            - button [ref=e39] [cursor=pointer]: Add to cart
        - generic [ref=e40]:
          - button [ref=e41] [cursor=pointer]:
            - button [ref=e42]:
              - img [ref=e43]
          - link [ref=e45] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - img [ref=e46]
          - link [ref=e47] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - text: Sample Jacket Name
          - link [ref=e48] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - text: A sample description for the product.
          - generic [ref=e49]:
            - generic [ref=e50]: $129.50
            - button [ref=e51] [cursor=pointer]: Add to cart
        - generic [ref=e52]:
          - button [ref=e53] [cursor=pointer]:
            - button [ref=e54]:
              - img [ref=e55]
          - link [ref=e57] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - img [ref=e58]
          - link [ref=e59] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - text: Sample Trouser Name
          - link [ref=e60] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - text: A sample description for the product.
          - generic [ref=e61]:
            - generic [ref=e62]: $72.00
            - button [ref=e63] [cursor=pointer]: Add to cart
        - generic [ref=e64]:
          - button [ref=e65] [cursor=pointer]:
            - button [ref=e66]:
              - img [ref=e67]
          - link [ref=e69] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - img [ref=e70]
          - link [ref=e71] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - text: Sample T-Shirt Name
          - link [ref=e72] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - text: A sample description for the product.
          - generic [ref=e73]:
            - generic [ref=e74]: $45.00
            - button [ref=e75] [cursor=pointer]: Add to cart
        - generic [ref=e76]:
          - button [ref=e77] [cursor=pointer]:
            - button [ref=e78]:
              - img [ref=e79]
          - link [ref=e81] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - img [ref=e82]
          - link [ref=e83] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - text: Sample Sunglass Name
          - link [ref=e84] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - text: A sample description for the product.
          - generic [ref=e85]:
            - generic [ref=e86]: $256.45
            - button [ref=e87] [cursor=pointer]: Add to cart
        - generic [ref=e88]:
          - button [ref=e89] [cursor=pointer]:
            - button [ref=e90]:
              - img [ref=e91]
          - link [ref=e93] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - img [ref=e94]
          - link [ref=e95] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - text: Sample Jacket Name
          - link [ref=e96] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - text: A sample description for the product.
          - generic [ref=e97]:
            - generic [ref=e98]: $111.00
            - button [ref=e99] [cursor=pointer]: Add to cart
        - generic [ref=e100]:
          - button [ref=e101] [cursor=pointer]:
            - button [ref=e102]:
              - img [ref=e103]
          - link [ref=e105] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - img [ref=e106]
          - link [ref=e107] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - text: Sample Sunglass Name
          - link [ref=e108] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - text: A sample description for the product.
          - generic [ref=e109]:
            - generic [ref=e110]: $256.45
            - button [ref=e111] [cursor=pointer]: Add to cart
        - generic [ref=e112]:
          - button [ref=e113] [cursor=pointer]:
            - button [ref=e114]:
              - img [ref=e115]
          - link [ref=e117] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - img [ref=e118]
          - link [ref=e119] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - text: Sample T-Shirt Name
          - link [ref=e120] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - text: A sample description for the product.
          - generic [ref=e121]:
            - generic [ref=e122]: $56.45
            - button [ref=e123] [cursor=pointer]: Add to cart
    - contentinfo [ref=e124]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - link [ref=e128] [cursor=pointer]:
            - /url: https://qabrains.com
            - img [ref=e129]
          - paragraph [ref=e130]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e131]:
          - heading [level=3] [ref=e132]: QA Topics
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link [ref=e135] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
                - text: Web Testing
            - listitem [ref=e136]:
              - link [ref=e137] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
                - text: Interview Questions
            - listitem [ref=e138]:
              - link [ref=e139] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
                - text: Testing Framework
            - listitem [ref=e140]:
              - link [ref=e141] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e143]
        - generic [ref=e145]:
          - heading [level=3] [ref=e146]: Quick Links
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link [ref=e149] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
                - text: Discussion
            - listitem [ref=e150]:
              - link [ref=e151] [cursor=pointer]:
                - /url: https://qabrains.com/about
                - text: About Us
            - listitem [ref=e152]:
              - link [ref=e153] [cursor=pointer]:
                - /url: https://qabrains.com/terms
                - text: Terms & Conditions
            - listitem [ref=e154]:
              - link [ref=e155] [cursor=pointer]:
                - /url: https://qabrains.com/policy
                - text: Privacy Policy
        - generic [ref=e156]:
          - heading [level=3] [ref=e157]: Follow Us
          - generic [ref=e158]:
            - link [ref=e159] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e160]
            - link [ref=e162] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e163]
            - link [ref=e166] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e167]
          - generic [ref=e170]:
            - heading [level=3] [ref=e171]: For Support
            - link [ref=e172] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
              - text: support@qabrains.com
      - paragraph [ref=e174]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e175]:
        - img [ref=e177]
        - generic [ref=e180]: Added to cart
  - alert [ref=e181]
  - dialog "Are you sure you want to log out?" [ref=e183]:
    - generic [ref=e184]:
      - heading "Are you sure you want to log out?" [level=2] [ref=e185]
      - paragraph [ref=e186]: You're about to log out. Continue?
    - generic [ref=e187]:
      - button "Close" [ref=e188] [cursor=pointer]
      - button "Logout" [active] [ref=e189] [cursor=pointer]
    - button "Close" [ref=e190] [cursor=pointer]:
      - img
      - generic [ref=e191]: Close
```

# Test source

```ts
  1  | import { OrderByOptions } from "@constants/OrderByOptions";
  2  | import { test, expect } from "@fixtures/fixtures";
  3  | 
  4  | test.describe("Home Page Tests", () => {
  5  |   test.afterEach(async ({ headerPage }) => {
  6  |     await headerPage.logout();
  7  |   });
  8  |   test("Verify 9 products are displayed on the home page", async ({
  9  |     loggedInPage,
  10 |     headerPage,
  11 |     homePage,
  12 |   }) => {
  13 |     await expect(loggedInPage).toHaveURL("/ecommerce");
  14 |     await expect(homePage.getProducts()).toHaveCount(9);
  15 |   });
  16 | 
  17 |   test("[@regression] Verify product list is sorted correctly based on selected option", async ({
  18 |     loggedInPage,
  19 |     homePage,
  20 |   }) => {
  21 |     let prices;
  22 |     await test.step("Select 'Price High to Low' sorting option", async () => {
  23 |       await homePage.selectOrderByOption(OrderByOptions.PRICE_HIGH_TO_LOW);
  24 |     });
  25 |     await loggedInPage.waitForTimeout(3000);
  26 |     await test.step("Capture all product prices", async () => {
  27 |       prices = await homePage.getAllPrices();
  28 |     });
  29 |     await test.step("Verify prices are sorted in descending order", async () => {
  30 |       for (let i = 0; i < prices.length - 1; i++) {
  31 |         expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
  32 |       }
  33 |     });
  34 |   });
  35 | });
  36 | 
  37 | test.describe("Favorite Product Tests", () => {
  38 |   test.afterEach(async ({ headerPage }) => {
  39 |     await headerPage.logout();
  40 |   });
  41 |   test("[@cart] Verify product is added to cart successfully ", async ({
  42 |     loggedInPage,
  43 |     headerPage,
  44 |     homePage,
  45 |     cartPage,
  46 |   }) => {
  47 |     const productName = "Sample Trouser Name";
  48 |     const productPrice = "$72.00";
  49 |     await homePage.addProductToCart(productName, productPrice);
  50 |     await loggedInPage.waitForTimeout(3000);
> 51 |     const buttonTextVisible = await homePage.verifyButtonText();
     |                                              ^ TypeError: homePage.verifyButtonText is not a function
  52 |     expect(buttonTextVisible).toBeTruthy();
  53 |     await headerPage.clickOnCartButton();
  54 |     await cartPage.clickOnRemove();
  55 |   });
  56 | 
  57 |   test("[@favorites] Verify clicking on favorites", async ({loggedInPage,homePage, headerPage})=>{
  58 |       await homePage.markProductAsFavorite("Sample Trouser Name");
  59 |       await headerPage.clickOnFavorite();
  60 |       await expect(loggedInPage).toHaveURL(/favorite/);
  61 |       await loggedInPage.waitForTimeout(3000);
  62 |     });
  63 | 
  64 |   test("[@smoke] Verify product details page is displayed when a product is clicked", async ({
  65 |     loggedInPage,
  66 |     headerPage,
  67 |     homePage,
  68 |     productDetailsPage
  69 |   }) => {
  70 |     let expectedProductName;
  71 |     await test.step("Click on a product from the list", async () => {
  72 |       expectedProductName = await homePage.getProductNameByIndex(1)
  73 |       await homePage.clickOnProductByIndex(1);
  74 |     });
  75 |     await test.step("Verify user is navigated to product details page", async () => {
  76 |       await expect(loggedInPage).toHaveURL(/product-details/);
  77 |     });
  78 |     await test.step("Verify correct product title is displayed ", async()=>{
  79 |       await expect(productDetailsPage.getProductName()).toHaveText(expectedProductName)
  80 |     })
  81 |   });
  82 | });
  83 | 
```