# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> [@regression] Remove product from cart
- Location: tests/CartTest.spec.js:31:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//p[text()=\'Your cart is empty\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//p[text()=\'Your cart is empty\']')

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
    - generic [ref=e21]:
      - heading "Your Cart" [level=3] [ref=e22]
      - generic [ref=e23]:
        - heading "Your cart is empty." [level=1] [ref=e24]
        - button "Continue Shopping" [ref=e25] [cursor=pointer]:
          - img [ref=e26]
          - generic [ref=e28]: Continue Shopping
    - contentinfo [ref=e29]:
      - generic [ref=e31]:
        - generic [ref=e32]:
          - link "logo" [ref=e33] [cursor=pointer]:
            - /url: https://qabrains.com
            - img "logo" [ref=e34]
          - paragraph [ref=e35]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e36]:
          - heading "QA Topics" [level=3] [ref=e37]
          - list [ref=e38]:
            - listitem [ref=e39]:
              - link "Web Testing" [ref=e40] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e41]:
              - link "Interview Questions" [ref=e42] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e43]:
              - link "Testing Framework" [ref=e44] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e45]:
              - link "See more" [ref=e46] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e48]
        - generic [ref=e50]:
          - heading "Quick Links" [level=3] [ref=e51]
          - list [ref=e52]:
            - listitem [ref=e53]:
              - link "Discussion" [ref=e54] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e55]:
              - link "About Us" [ref=e56] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e57]:
              - link "Terms & Conditions" [ref=e58] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e59]:
              - link "Privacy Policy" [ref=e60] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e61]:
          - heading "Follow Us" [level=3] [ref=e62]
          - generic [ref=e63]:
            - link [ref=e64] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e65]
            - link [ref=e67] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e68]
            - link [ref=e71] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e72]
          - generic [ref=e75]:
            - heading "For Support" [level=3] [ref=e76]
            - link "support@qabrains.com" [ref=e77] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e79]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e80]
```

# Test source

```ts
  1  | import { test, expect } from "@fixtures/fixtures";
  2  | 
  3  | test("[@regression] Verify adding product to cart", async ({
  4  |   loggedInPage,
  5  |   homePage,
  6  |   headerPage,
  7  |   cartPage,
  8  | }) => {
  9  |   const productName = "Sample Trouser Name";
  10 |   const productPrice = "$72.00";
  11 | 
  12 |   await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  13 | 
  14 |   await test.step("Add product to cart", async () => {
  15 |     await homePage.addProductToCart(productName, productPrice);
  16 |   });
  17 |   await test.step("Verify product is added to cart", async () => {
  18 |     await expect(homePage.getRemoveButton(productName)).toBeVisible();
  19 |     await expect(headerPage.getItemCountInCart()).toHaveText("1");
  20 |   });
  21 |   await test.step("Verify product details in cart", async () => {
  22 |     await headerPage.clickOnCartButton();
  23 |     await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty
  24 | 
  25 |     const cartItem = cartPage.getProductsInCart(productName, productPrice);
  26 |     await expect(cartItem).toHaveCount(1);
  27 |     await expect(cartItem).toBeVisible();
  28 |   });
  29 |   await headerPage.logout();
  30 | });
  31 | test("[@regression] Remove product from cart", async ({
  32 |   loggedInPage,
  33 |   homePage,
  34 |   headerPage,
  35 |   cartPage,
  36 | }) => {
  37 |   const productName = "Sample Trouser Name";
  38 |   const productPrice = "$72.00";
  39 | 
  40 |   await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  41 | 
  42 |   await test.step("Add product to cart", async () => {
  43 |     await homePage.addProductToCart(productName, productPrice);
  44 |   });
  45 |   await test.step("Verify product is added to cart", async () => {
  46 |     await expect(homePage.getRemoveButton(productName)).toBeVisible();
  47 |     await expect(headerPage.getItemCountInCart()).toHaveText("1");
  48 |   });
  49 |   await test.step("Verify product details in cart", async () => {
  50 |     await headerPage.clickOnCartButton();
  51 |     await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty
  52 | 
  53 |     const cartItem = cartPage.getProductsInCart(productName, productPrice);
  54 |     await expect(cartItem).toHaveCount(1);
  55 |     await expect(cartItem).toBeVisible();
  56 |   });
  57 |   await test.step("Remove product from cart and verify", async () => {
  58 |     await cartPage.removeFromCart(productName, productPrice);
  59 |     await expect(cartPage.cartList.first()).not.toBeVisible(); // Verify cart is empty
> 60 |    await expect(cartPage.getEmptyCartMessage()).toBeVisible(); // Verify empty cart message is visible
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  61 |   });
  62 |   await headerPage.logout();
  63 | });
  64 | 
```