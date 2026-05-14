# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/ProductPurchaseFlowTest.spec.js >> [[@e2e] User can complete product purchase flow
- Location: tests/e2e/ProductPurchaseFlowTest.spec.js:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//h1[text()]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//h1[text()]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - button "test@qabrains.com" [ref=e13] [cursor=pointer]:
            - img [ref=e14]
            - generic [ref=e16]: test@qabrains.com
            - img [ref=e18]
    - generic [ref=e22]:
      - button "Back to Products" [ref=e23] [cursor=pointer]:
        - img [ref=e24]
        - text: Back to Products
      - generic [ref=e27]:
        - generic [ref=e28]:
          - img "Sample Trouser Name" [ref=e29]
          - button [ref=e30]:
            - button [ref=e31] [cursor=pointer]:
              - img [ref=e32]
        - generic [ref=e34]:
          - heading "Sample Trouser Name" [level=1] [ref=e35]
          - paragraph [ref=e36]: A sample description for the product.
          - generic [ref=e37]:
            - heading "Quantity" [level=2] [ref=e38]
            - generic [ref=e39]:
              - button "−" [ref=e40] [cursor=pointer]
              - textbox [ref=e41]: "1"
              - button "+" [ref=e42] [cursor=pointer]
          - generic [ref=e43]: $72.00
          - button "Add to cart" [ref=e45] [cursor=pointer]
    - contentinfo [ref=e46]:
      - generic [ref=e48]:
        - generic [ref=e49]:
          - link "logo" [ref=e50] [cursor=pointer]:
            - /url: https://qabrains.com
            - img "logo" [ref=e51]
          - paragraph [ref=e52]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e53]:
          - heading "QA Topics" [level=3] [ref=e54]
          - list [ref=e55]:
            - listitem [ref=e56]:
              - link "Web Testing" [ref=e57] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e58]:
              - link "Interview Questions" [ref=e59] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e60]:
              - link "Testing Framework" [ref=e61] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e62]:
              - link "See more" [ref=e63] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e65]
        - generic [ref=e67]:
          - heading "Quick Links" [level=3] [ref=e68]
          - list [ref=e69]:
            - listitem [ref=e70]:
              - link "Discussion" [ref=e71] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e72]:
              - link "About Us" [ref=e73] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e74]:
              - link "Terms & Conditions" [ref=e75] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e76]:
              - link "Privacy Policy" [ref=e77] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e78]:
          - heading "Follow Us" [level=3] [ref=e79]
          - generic [ref=e80]:
            - link [ref=e81] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e82]
            - link [ref=e84] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e85]
            - link [ref=e88] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e89]
          - generic [ref=e92]:
            - heading "For Support" [level=3] [ref=e93]
            - link "support@qabrains.com" [ref=e94] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e96]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e97]
```

# Test source

```ts
  1  | import testData from "@testdata/products.json";
  2  | import { test, expect } from "@hooks/testHooks";
  3  | 
  4  | test("[[@e2e] User can complete product purchase flow", async ({
  5  |   loggedInPage,
  6  |   homePage,
  7  |   productDetailsPage,
  8  |   cartPage,
  9  |   headerPage,
  10 |   checkOutPage,
  11 | }) => {
  12 |   const { name, description, price } = testData.product[0];
  13 |   const checkOutCompleteMessageText = "Thank you for your order!";
  14 |   await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  15 | 
  16 |   await test.step("Validate product details", async () => {
  17 |     await homePage.clickOnProduct(name);
> 18 |     await expect(productDetailsPage.getProductName()).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  19 |     await expect(productDetailsPage.getProductName()).toHaveText(name);
  20 |     await expect(productDetailsPage.getProductDescription()).toHaveText(
  21 |       description,
  22 |     );
  23 |     await expect(productDetailsPage.getProductPrice()).toHaveText(price);
  24 |   });
  25 |   await test.step("Update product quantity and add to cart", async () => {
  26 |     await productDetailsPage.increaseProductQuantity();
  27 |     await expect(productDetailsPage.getProductQuantity()).toHaveValue("2");
  28 |     await productDetailsPage.addProductToCart();
  29 |   });
  30 |   await test.step("Validate cart pricing", async () => {
  31 |     await productDetailsPage.clickOnBackToProducts();
  32 |     await headerPage.clickOnCartButton();
  33 |     const quantity = await cartPage.getQuantityValue();
  34 |     const price = await cartPage.getPriceValue();
  35 |     const total = await cartPage.getTotalValue();
  36 |     expect(quantity * price).toBe(total);
  37 |   });
  38 |   await test.step("Checkout process", async () => {
  39 |     await cartPage.clickOnProductCheckout();
  40 |     await checkOutPage.fillCheckOutDetails("John", "Doe", "560043");
  41 |     expect(checkOutPage.reviewProductName()).toHaveText(name);
  42 |     expect(checkOutPage.reviewProductQuantity()).toHaveText("2");
  43 |     await checkOutPage.clickOnFinishButton();
  44 |     await expect(checkOutPage.checkoutComplete()).toBeVisible();
  45 |     await expect(checkOutPage.checkoutComplete()).toHaveText(
  46 |       checkOutCompleteMessageText,
  47 |     );
  48 |   });
  49 |   await headerPage.logout();
  50 | });
  51 | 
```