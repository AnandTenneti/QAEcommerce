# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CartTest.spec.js >> Cart Functionality Tests >> [@regression_m] Verify adding multiple products to cart and total price calculation
- Location: tests/CartTest.spec.js:68:7

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('//p[text()=\'Total\']/following-sibling::p') resolved to 2 elements:
    1) <p class="font-bold text-lg font-oswald">$89.00</p> aka getByText('$').nth(1)
    2) <p class="font-bold text-lg font-oswald">$49.99</p> aka getByText('$').nth(3)

Call log:
  - waiting for locator('//p[text()=\'Total\']/following-sibling::p')

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
      - listitem [ref=e75]:
        - img [ref=e77]
        - generic [ref=e80]: Added to cart
  - alert [ref=e81]
  - dialog "Are you sure you want to log out?" [ref=e83]:
    - generic [ref=e84]:
      - heading "Are you sure you want to log out?" [level=2] [ref=e85]
      - paragraph [ref=e86]: You're about to log out. Continue?
    - generic [ref=e87]:
      - button "Close" [ref=e88] [cursor=pointer]
      - button "Logout" [active] [ref=e89] [cursor=pointer]
    - button "Close" [ref=e90] [cursor=pointer]:
      - img
      - generic [ref=e91]: Close
```

# Test source

```ts
  1  | import { Common } from "@utils/Common";
  2  | export class CartPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     this.cartList = page.locator("div.cart-list");
  6  |     this.removeLink = page.getByRole("button", { name: "Remove" });
  7  |     this.removeButtonInDialog = page.locator(
  8  |       "//button[@data-slot='dialog-close' and text()='Remove']",
  9  |     );
  10 |     this.productQuantity = page.locator(
  11 |       "//div[contains(@class, 'cart-list')]//span",
  12 |     );
  13 |     this.productPrice = page.locator(
  14 |       "//p[text()='Price']/following-sibling::p",
  15 |     );
  16 |     this.totalPrice = page.locator("//p[text()='Total']/following-sibling::p");
  17 |     this.continueShopping = page.getByRole("button", {
  18 |       name: "Continue Shopping",
  19 |     });
  20 |     this.checkoutButton = page.getByRole("button", { name: "Checkout" });
  21 |     this.productName = page.locator("//div[contains(@class, 'cart-list')]//h3");
  22 | 
  23 |     this.emptyCartMessage = page.locator("//h1[text()='Your cart is empty.']");
  24 |   }
  25 | 
  26 |   getEmptyCartMessage() {
  27 |     return this.emptyCartMessage;
  28 |   }
  29 | 
  30 |   // async clickOnRemove() {
  31 |   //   await this.removeLink.click();
  32 |   //   await this.page.waitForSelector('[data-slot="dialog-close"]');
  33 |   //   const removeBtn = this.page
  34 |   //     .locator('[data-slot="dialog-close"]')
  35 |   //     .filter({ hasText: "Remove" });
  36 |   //   await removeBtn.click();
  37 |   // }
  38 |   async removeFromCart(prodcutName, price) {
  39 |     const cartItem = this.cartList
  40 |       .filter({ hasText: prodcutName })
  41 |       .filter({ has: this.page.locator(`text=${price}`) });
  42 |     await cartItem.getByRole("button", { name: "Remove" }).click();
  43 |     await this.page.waitForSelector('[data-slot="dialog-close"]');
  44 |     const removeBtn = this.page
  45 |       .locator('[data-slot="dialog-close"]')
  46 |       .filter({ hasText: "Remove" });
  47 |     await removeBtn.click();
  48 |   }
  49 | 
  50 |   getProductQuantity() {
  51 |     return this.productQuantity;
  52 |   }
  53 | 
  54 |   getProductPrice() {
  55 |     return this.productPrice;
  56 |   }
  57 | 
  58 |   getTotalPrice() {
  59 |     return this.totalPrice;
  60 |   }
  61 | 
  62 |   async clickOnProductCheckout() {
  63 |     await this.checkoutButton.click();
  64 |   }
  65 | 
  66 |   async getQuantityValue() {
  67 |     const text = await this.getProductQuantity().textContent();
  68 |     return parseInt(text.trim(), 10);
  69 |   }
  70 | 
  71 |   async getPriceValue() {
  72 |     const text = await this.getProductPrice().textContent();
  73 |     return Common.roundingNumber(text, "$");
  74 |   }
  75 | 
  76 |   async getTotalValue() {
> 77 |     const text = await this.getTotalPrice().textContent();
     |                                             ^ Error: locator.textContent: Error: strict mode violation: locator('//p[text()=\'Total\']/following-sibling::p') resolved to 2 elements:
  78 |     return Common.roundingNumber(text, "$");
  79 |   }
  80 |   getProductName() {
  81 |     return this.productName;
  82 |   }
  83 | 
  84 |   getProductsInCart(productName, price) {
  85 |     return this.cartList
  86 |       .filter({ hasText: productName })
  87 |       .filter({ has: this.page.locator(`text=${price}`) });
  88 |   }
  89 | }
  90 | 
```