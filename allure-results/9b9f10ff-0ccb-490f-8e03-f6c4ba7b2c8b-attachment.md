# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> [[@cart_1] Verify cart functionality and checkout process
- Location: tests/CartTest.spec.js:3:5

# Error details

```
ReferenceError: cartPage is not defined
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
          - button "1" [ref=e10] [cursor=pointer]:
            - img [ref=e11]
            - generic [ref=e13]: "1"
          - button "test@qabrains.com" [ref=e14] [cursor=pointer]:
            - img [ref=e15]
            - generic [ref=e17]: test@qabrains.com
            - img [ref=e19]
    - generic [ref=e22]:
      - heading "Your Cart" [level=3] [ref=e23]
      - generic [ref=e25]:
        - generic [ref=e26]:
          - generic [ref=e27]:
            - paragraph [ref=e28]: Product Details
            - img "Sample Trouser Name" [ref=e30]
          - generic [ref=e31]:
            - heading "Sample Trouser Name" [level=3] [ref=e32]
            - button "Remove" [ref=e33] [cursor=pointer]
        - generic [ref=e34]:
          - paragraph [ref=e35]: Quantity
          - generic [ref=e36]:
            - button "-" [ref=e37] [cursor=pointer]
            - generic [ref=e38]: "1"
            - button "+" [ref=e39] [cursor=pointer]
        - generic [ref=e40]:
          - paragraph [ref=e41]: Price
          - paragraph [ref=e42]: $72.00
        - generic [ref=e43]:
          - paragraph [ref=e44]: Total
          - paragraph [ref=e45]: $72.00
      - generic [ref=e46]:
        - button "Continue Shopping" [ref=e47] [cursor=pointer]:
          - img [ref=e48]
          - generic [ref=e50]: Continue Shopping
        - button "Checkout" [ref=e51] [cursor=pointer]:
          - generic [ref=e52]: Checkout
          - img [ref=e53]
    - contentinfo [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]:
          - link "logo" [ref=e59] [cursor=pointer]:
            - /url: https://qabrains.com
            - img "logo" [ref=e60]
          - paragraph [ref=e61]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e62]:
          - heading "QA Topics" [level=3] [ref=e63]
          - paragraph [ref=e64]: No featured topics available
        - generic [ref=e65]:
          - heading "Quick Links" [level=3] [ref=e66]
          - list [ref=e67]:
            - listitem [ref=e68]:
              - link "Discussion" [ref=e69] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e70]:
              - link "About Us" [ref=e71] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e72]:
              - link "Terms & Conditions" [ref=e73] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e74]:
              - link "Privacy Policy" [ref=e75] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e76]:
          - heading "Follow Us" [level=3] [ref=e77]
          - generic [ref=e78]:
            - link [ref=e79] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e80]
            - link [ref=e82] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e83]
            - link [ref=e86] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e87]
          - generic [ref=e90]:
            - heading "For Support" [level=3] [ref=e91]
            - link "support@qabrains.com" [ref=e92] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e94]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e95]:
        - img [ref=e97]
        - generic [ref=e100]: Added to cart
  - alert [ref=e101]
```

# Test source

```ts
  1  | import { test, expect } from "@fixtures/fixtures";
  2  | 
  3  | test("[[@cart_1] Verify cart functionality and checkout process", async ({
  4  |   loggedInPage,
  5  |   homePage,
  6  |   headerPage,
  7  | }) => {
  8  |   const productName = "Sample Trouser Name";
  9  |   const productPrice = "$72.00";
  10 | 
  11 |   await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  12 | 
  13 |   await test.step("Add product to cart", async () => {
  14 |     await homePage.addProductToCart(productName, productPrice);
  15 |   });
  16 |   await test.step("Verify product is added to cart", async () => {
  17 |     await expect(homePage.getRemoveButton()).toBeVisible();
  18 |     await expect(homePage.getRemoveButton()).toHaveText("Remove from cart");
  19 |     await expect(headerPage.getItemCountInCart()).toHaveText("1");
  20 |   });
  21 |   await test.step("Verify product details in cart", async () => {
  22 |     await headerPage.clickOnCartButton();
  23 |     await expect(loggedInPage).toHaveURL(/\/cart$/);
> 24 |     const cartItem = cartPage.getProductsInCart(productName, productPrice);
     |                      ^ ReferenceError: cartPage is not defined
  25 |     await expect(cartItem).toBeVisible();
  26 |   });
  27 |   //await cartPage.clickOnRemove();
  28 |   //});
  29 |   //   clear
  30 |   await headerPage.logout();
  31 | });
  32 | 
```