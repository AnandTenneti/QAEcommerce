# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> [[@cart_1] Verify cart functionality and checkout process
- Location: tests/CartTest.spec.js:3:5

# Error details

```
Error: toBeVisible can be only used with Locator object
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
          - list [ref=e64]:
            - listitem [ref=e65]:
              - link "Web Testing" [ref=e66] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e67]:
              - link "Interview Questions" [ref=e68] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e69]:
              - link "Testing Framework" [ref=e70] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e71]:
              - link "See more" [ref=e72] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e74]
        - generic [ref=e76]:
          - heading "Quick Links" [level=3] [ref=e77]
          - list [ref=e78]:
            - listitem [ref=e79]:
              - link "Discussion" [ref=e80] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e81]:
              - link "About Us" [ref=e82] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e83]:
              - link "Terms & Conditions" [ref=e84] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e85]:
              - link "Privacy Policy" [ref=e86] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e87]:
          - heading "Follow Us" [level=3] [ref=e88]
          - generic [ref=e89]:
            - link [ref=e90] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e91]
            - link [ref=e93] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e94]
            - link [ref=e97] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e98]
          - generic [ref=e101]:
            - heading "For Support" [level=3] [ref=e102]
            - link "support@qabrains.com" [ref=e103] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e105]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e106]:
        - img [ref=e108]
        - generic [ref=e111]: Added to cart
  - alert [ref=e112]
```

# Test source

```ts
  1  | import { test, expect } from "@fixtures/fixtures";
  2  | 
  3  | test("[[@cart_1] Verify cart functionality and checkout process", async ({
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
  18 |     await expect(homePage.getRemoveButton()).toBeVisible();
  19 |     await expect(homePage.getRemoveButton()).toHaveText("Remove from cart");
  20 |     await expect(headerPage.getItemCountInCart()).toHaveText("1");
  21 |   });
  22 |   await test.step("Verify product details in cart", async () => {
  23 |     await headerPage.clickOnCartButton();
  24 |     await expect(loggedInPage).toHaveURL(/\/cart$/);
  25 |     const cartItem = cartPage.getProductsInCart(productName, productPrice);
> 26 |     await expect(cartItem).toBeVisible();
     |                            ^ Error: toBeVisible can be only used with Locator object
  27 |   });
  28 |   //await cartPage.clickOnRemove();
  29 |   //});
  30 |   //   clear
  31 |   await headerPage.logout();
  32 | });
  33 | 
```