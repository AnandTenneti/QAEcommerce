# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/ProductPurchaseFlowTest.spec.js >> [[@e2e] User can complete product purchase flow
- Location: tests/e2e/ProductPurchaseFlowTest.spec.js:3:5

# Error details

```
ReferenceError: testData is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "logo (Practice Site)" [ref=e6]:
        - /url: /ecommerce
        - img "logo" [ref=e7]
        - generic [ref=e8]: (Practice Site)
    - generic [ref=e10]:
      - link "Back to home" [ref=e11]:
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
                - text: test@qabrains.com
            - generic [ref=e36]:
              - generic [ref=e37]: Password*
              - generic [ref=e38]:
                - textbox "Password*" [ref=e39]:
                  - /placeholder: "*******"
                  - text: Password123
                - button [ref=e40] [cursor=pointer]:
                  - img [ref=e41]
          - button "Login" [disabled] [ref=e47]:
            - text: Login
            - img [ref=e52]
  - region "Notifications alt+T"
  - alert [ref=e54]
```

# Test source

```ts
  1  | import { test, expect } from "@fixtures/fixtures";
  2  | 
  3  | test("[[@e2e] User can complete product purchase flow", async ({
  4  |   loggedInPage,
  5  |   homePage,
  6  |   productDetailsPage,
  7  |   cartPage,
  8  |   headerPage,
  9  |   checkOutPage,
  10 | }) => {
> 11 |   const { name, description, price } = testData.product[0];
     |                                        ^ ReferenceError: testData is not defined
  12 |   const checkOutCompleteMessageText = "Thank you for your order!";
  13 |   await expect(loggedInPage).toHaveURL("/ecommerce");
  14 | 
  15 |   await test.step("Validate product details", async () => {
  16 |     await homePage.clickOnProduct(name);
  17 |     await expect(productDetailsPage.getProductName()).toBeVisible();
  18 |     await expect(productDetailsPage.getProductName()).toHaveText(name);
  19 |     await expect(productDetailsPage.getProductDescription()).toHaveText(
  20 |       description,
  21 |     );
  22 |     await expect(productDetailsPage.getProductPrice()).toHaveText(price);
  23 |   });
  24 |   await test.step("Update product quantity and add to cart", async () => {
  25 |     await productDetailsPage.increaseProductQuantity();
  26 |     await expect(productDetailsPage.getProductQuantity()).toHaveValue("2");
  27 |     await productDetailsPage.addProductToCart();
  28 |   });
  29 |   await test.step("Validate cart pricing", async () => {
  30 |     await productDetailsPage.clickOnBackToProducts();
  31 |     await headerPage.clickOnCartButton();
  32 |     const quantity = await cartPage.getQuantityValue();
  33 |     const price = await cartPage.getPriceValue();
  34 |     const total = await cartPage.getTotalValue();
  35 |     expect(quantity * price).toBe(total);
  36 |   });
  37 |   await test.step("Checkout process", async () => {
  38 |     await cartPage.clickOnProductCheckout();
  39 | 
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