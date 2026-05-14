# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/CartTest.spec.js >> Cart Functionality Tests >> [@regression] Verify adding product to cart
- Location: tests/cart/CartTest.spec.js:5:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/ecommerce$/
Received string:  "https://practice.qabrains.com/ecommerce/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    5 × unexpected value "https://practice.qabrains.com/ecommerce/login"
    - waiting for" https://practice.qabrains.com/ecommerce/login" navigation to finish...
    - navigated to "https://practice.qabrains.com/ecommerce/login"
    3 × unexpected value "https://practice.qabrains.com/ecommerce/login"

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
    - generic [ref=e20]:
      - generic [ref=e21]:
        - heading "Products" [level=3] [ref=e22]
        - generic [ref=e23]:
          - paragraph [ref=e24]: Order by
          - combobox [ref=e25] [cursor=pointer]:
            - text: Select...
            - img
      - generic [ref=e26]:
        - generic [ref=e27]:
          - button [ref=e28] [cursor=pointer]:
            - button [ref=e29]:
              - img [ref=e30]
          - link "Sample Shirt Name" [ref=e32] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
            - img "Sample Shirt Name"
          - link "Sample Shirt Name" [ref=e33] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - link "A sample description for the product." [ref=e34] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - generic [ref=e35]:
            - generic [ref=e36]: $49.99
            - button "Add to cart" [ref=e37] [cursor=pointer]
        - generic [ref=e38]:
          - button [ref=e39] [cursor=pointer]:
            - button [ref=e40]:
              - img [ref=e41]
          - link "Sample Shoe Name" [ref=e43] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
            - img "Sample Shoe Name"
          - link "Sample Shoe Name" [ref=e44] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - link "A sample description for the product." [ref=e45] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - generic [ref=e46]:
            - generic [ref=e47]: $89.00
            - button "Add to cart" [ref=e48] [cursor=pointer]
        - generic [ref=e49]:
          - button [ref=e50] [cursor=pointer]:
            - button [ref=e51]:
              - img [ref=e52]
          - link "Sample Jacket Name" [ref=e54] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - img "Sample Jacket Name"
          - link "Sample Jacket Name" [ref=e55] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - link "A sample description for the product." [ref=e56] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - generic [ref=e57]:
            - generic [ref=e58]: $129.50
            - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button [ref=e61] [cursor=pointer]:
            - button [ref=e62]:
              - img [ref=e63]
          - link "Sample Trouser Name" [ref=e65] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - img "Sample Trouser Name"
          - link "Sample Trouser Name" [ref=e66] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - link "A sample description for the product." [ref=e67] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - generic [ref=e68]:
            - generic [ref=e69]: $72.00
            - button "Add to cart" [ref=e70] [cursor=pointer]
        - generic [ref=e71]:
          - button [ref=e72] [cursor=pointer]:
            - button [ref=e73]:
              - img [ref=e74]
          - link "Sample T-Shirt Name" [ref=e76] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e77] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - link "A sample description for the product." [ref=e78] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - generic [ref=e79]:
            - generic [ref=e80]: $45.00
            - button "Add to cart" [ref=e81] [cursor=pointer]
        - generic [ref=e82]:
          - button [ref=e83] [cursor=pointer]:
            - button [ref=e84]:
              - img [ref=e85]
          - link "Sample Sunglass Name" [ref=e87] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - img "Sample Sunglass Name"
          - link "Sample Sunglass Name" [ref=e88] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - link "A sample description for the product." [ref=e89] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - generic [ref=e90]:
            - generic [ref=e91]: $256.45
            - button "Add to cart" [ref=e92] [cursor=pointer]
        - generic [ref=e93]:
          - button [ref=e94] [cursor=pointer]:
            - button [ref=e95]:
              - img [ref=e96]
          - link "Sample Jacket Name" [ref=e98] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - img "Sample Jacket Name"
          - link "Sample Jacket Name" [ref=e99] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - link "A sample description for the product." [ref=e100] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - generic [ref=e101]:
            - generic [ref=e102]: $111.00
            - button "Add to cart" [ref=e103] [cursor=pointer]
        - generic [ref=e104]:
          - button [ref=e105] [cursor=pointer]:
            - button [ref=e106]:
              - img [ref=e107]
          - link "Sample Sunglass Name" [ref=e109] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - img "Sample Sunglass Name"
          - link "Sample Sunglass Name" [ref=e110] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - link "A sample description for the product." [ref=e111] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - generic [ref=e112]:
            - generic [ref=e113]: $256.45
            - button "Add to cart" [ref=e114] [cursor=pointer]
        - generic [ref=e115]:
          - button [ref=e116] [cursor=pointer]:
            - button [ref=e117]:
              - img [ref=e118]
          - link "Sample T-Shirt Name" [ref=e120] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e121] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - link "A sample description for the product." [ref=e122] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - generic [ref=e123]:
            - generic [ref=e124]: $56.45
            - button "Add to cart" [ref=e125] [cursor=pointer]
    - contentinfo [ref=e126]:
      - generic [ref=e128]:
        - generic [ref=e129]:
          - link "logo":
            - /url: https://qabrains.com
            - img "logo"
          - paragraph [ref=e130]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e131]:
          - heading "QA Topics" [level=3] [ref=e132]
          - paragraph [ref=e133]: No featured topics available
        - generic [ref=e134]:
          - heading "Quick Links" [level=3] [ref=e135]
          - list [ref=e136]:
            - listitem [ref=e137]:
              - link "Discussion" [ref=e138] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e139]:
              - link "About Us" [ref=e140] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e141]:
              - link "Terms & Conditions" [ref=e142] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e143]:
              - link "Privacy Policy" [ref=e144] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e145]:
          - heading "Follow Us" [level=3] [ref=e146]
          - generic [ref=e147]:
            - link [ref=e148] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e149]
            - link [ref=e151] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e152]
            - link [ref=e155] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e156]
          - generic [ref=e159]:
            - heading "For Support" [level=3] [ref=e160]
            - link "support@qabrains.com" [ref=e161] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e163]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e164]
```

# Test source

```ts
  1   | import { test, expect } from "@fixtures/baseTest";
  2   | import { testHooks } from "@hooks/testHooks";
  3   | 
  4   | test.describe("Cart Functionality Tests", () => {
  5   |   test("[@regression] Verify adding product to cart", async ({
  6   |     loggedInPage,
  7   |     homePage,
  8   |     cartPage,
  9   |     headerPage,
  10  |   }) => {
  11  |     const productName = "Sample Trouser Name";
  12  |     const productPrice = "$72.00";
  13  | 
> 14  |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
      |                                ^ Error: expect(page).toHaveURL(expected) failed
  15  | 
  16  |     await test.step("Add product to cart", async () => {
  17  |       await homePage.addProductToCart(productName, productPrice);
  18  |     });
  19  |     await test.step("Verify product is added to cart", async () => {
  20  |       await expect(homePage.getRemoveButton(productName)).toBeVisible();
  21  |       await expect(headerPage.getItemCountInCart()).toHaveText("1");
  22  |     });
  23  |     await test.step("Verify product details in cart", async () => {
  24  |       await headerPage.clickOnCartButton();
  25  |       await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty
  26  | 
  27  |       const cartItem = cartPage.getProductsInCart(productName, productPrice);
  28  |       await expect(cartItem).toHaveCount(1);
  29  |       await expect(cartItem).toBeVisible();
  30  |     });
  31  |   });
  32  |   test("[@regression] Remove product from cart", async ({
  33  |     loggedInPage,
  34  |     homePage,
  35  |     headerPage,
  36  |     cartPage,
  37  |   }) => {
  38  |     const productName = "Sample Trouser Name";
  39  |     const productPrice = "$72.00";
  40  | 
  41  |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  42  | 
  43  |     await test.step("Add product to cart", async () => {
  44  |       await homePage.addProductToCart(productName, productPrice);
  45  |     });
  46  |     await test.step("Verify product is added to cart", async () => {
  47  |       await expect(homePage.getRemoveButton(productName)).toBeVisible();
  48  |       await expect(headerPage.getItemCountInCart()).toHaveText("1");
  49  |     });
  50  |     await test.step("Verify product details in cart", async () => {
  51  |       await headerPage.clickOnCartButton();
  52  |       await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty
  53  | 
  54  |       const cartItem = cartPage.getProductsInCart(productName, productPrice);
  55  |       await expect(cartItem).toHaveCount(1);
  56  |       await expect(cartItem).toBeVisible();
  57  |     });
  58  |     await test.step("Remove product from cart and verify", async () => {
  59  |       await cartPage.removeFromCart(productName, productPrice);
  60  |       await expect(cartPage.cartList.first()).not.toBeVisible(); // Verify cart is empty
  61  |       await expect(cartPage.getEmptyCartMessage()).toBeVisible(); // Verify empty cart message is visible
  62  |     });
  63  |   });
  64  | 
  65  |   test("[@regression] Verify adding multiple products to cart and total price calculation", async ({
  66  |     loggedInPage,
  67  |     homePage,
  68  |     headerPage,
  69  |     cartPage,
  70  |   }) => {
  71  |     const products = [
  72  |       { name: "Sample Shoe Name", price: "$89.00" },
  73  |       { name: "Sample Shirt Name", price: "$49.99" },
  74  |     ];
  75  |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  76  | 
  77  |     await test.step("Add multiple products to cart", async () => {
  78  |       for (const product of products) {
  79  |         console.log(
  80  |           `Adding product: ${product.name} with price: ${product.price}`,
  81  |         );
  82  | 
  83  |         await homePage.addProductToCart(product.name, product.price);
  84  |         await expect(homePage.getRemoveButton(product.name)).toBeVisible();
  85  |       }
  86  |       await expect(headerPage.getItemCountInCart()).toHaveText(
  87  |         products.length.toString(),
  88  |       );
  89  |     });
  90  |     await test.step("Verify products in cart", async () => {
  91  |       await headerPage.clickOnCartButton();
  92  |       await expect(cartPage.cartItems.first()).toBeVisible();
  93  | 
  94  |       await expect(cartPage.getProductCountInCart()).toHaveCount(
  95  |         products.length,
  96  |       );
  97  |       await cartPage.removeFromCart(products[0].name, products[0].price);
  98  |       await expect(cartPage.getProductCountInCart()).toHaveCount(
  99  |         products.length - 1,
  100 |       );
  101 |     });
  102 |     await test.step("Verify product count in the cart in the header ", async () => {
  103 |       await expect(headerPage.getItemCountInCart()).toHaveText(
  104 |         (products.length - 1).toString(),
  105 |       );
  106 |     });
  107 |   });
  108 | });
  109 | 
```