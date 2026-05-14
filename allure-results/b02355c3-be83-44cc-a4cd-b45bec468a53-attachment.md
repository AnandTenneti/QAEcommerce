# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/CartTest.spec.js >> Cart Functionality Tests >> [@regression] Verify adding product to cart
- Location: tests/cart/CartTest.spec.js:4:7

# Error details

```
ReferenceError: headerPage is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link "logo (Practice Site)" [ref=e6]:
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
    - generic [ref=e21]:
      - generic [ref=e22]:
        - heading "Products" [level=3] [ref=e23]
        - generic [ref=e24]:
          - paragraph [ref=e25]: Order by
          - combobox [ref=e26] [cursor=pointer]:
            - text: Select...
            - img
      - generic [ref=e27]:
        - generic [ref=e28]:
          - button [ref=e29] [cursor=pointer]:
            - button [ref=e30]:
              - img [ref=e31]
          - link "Sample Shirt Name" [ref=e33]:
            - /url: /ecommerce/product-details?id=1
            - img "Sample Shirt Name" [ref=e34]
          - link "Sample Shirt Name" [ref=e35]:
            - /url: /ecommerce/product-details?id=1
          - link "A sample description for the product." [ref=e36]:
            - /url: /ecommerce/product-details?id=1
          - generic [ref=e37]:
            - generic [ref=e38]: $49.99
            - button "Add to cart" [ref=e39] [cursor=pointer]
        - generic [ref=e40]:
          - button [ref=e41] [cursor=pointer]:
            - button [ref=e42]:
              - img [ref=e43]
          - link "Sample Shoe Name" [ref=e45]:
            - /url: /ecommerce/product-details?id=2
            - img "Sample Shoe Name" [ref=e46]
          - link "Sample Shoe Name" [ref=e47]:
            - /url: /ecommerce/product-details?id=2
          - link "A sample description for the product." [ref=e48]:
            - /url: /ecommerce/product-details?id=2
          - generic [ref=e49]:
            - generic [ref=e50]: $89.00
            - button "Add to cart" [ref=e51] [cursor=pointer]
        - generic [ref=e52]:
          - button [ref=e53] [cursor=pointer]:
            - button [ref=e54]:
              - img [ref=e55]
          - link "Sample Jacket Name" [ref=e57]:
            - /url: /ecommerce/product-details?id=3
            - img "Sample Jacket Name" [ref=e58]
          - link "Sample Jacket Name" [ref=e59]:
            - /url: /ecommerce/product-details?id=3
          - link "A sample description for the product." [ref=e60]:
            - /url: /ecommerce/product-details?id=3
          - generic [ref=e61]:
            - generic [ref=e62]: $129.50
            - button "Add to cart" [ref=e63] [cursor=pointer]
        - generic [ref=e64]:
          - button [ref=e65] [cursor=pointer]:
            - button [ref=e66]:
              - img [ref=e67]
          - link "Sample Trouser Name" [ref=e69]:
            - /url: /ecommerce/product-details?id=4
            - img "Sample Trouser Name" [ref=e70]
          - link "Sample Trouser Name" [ref=e71]:
            - /url: /ecommerce/product-details?id=4
          - link "A sample description for the product." [ref=e72]:
            - /url: /ecommerce/product-details?id=4
          - generic [ref=e73]:
            - generic [ref=e74]: $72.00
            - button "Remove from cart" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - button [ref=e77] [cursor=pointer]:
            - button [ref=e78]:
              - img [ref=e79]
          - link "Sample T-Shirt Name" [ref=e81]:
            - /url: /ecommerce/product-details?id=5
            - img "Sample T-Shirt Name" [ref=e82]
          - link "Sample T-Shirt Name" [ref=e83]:
            - /url: /ecommerce/product-details?id=5
          - link "A sample description for the product." [ref=e84]:
            - /url: /ecommerce/product-details?id=5
          - generic [ref=e85]:
            - generic [ref=e86]: $45.00
            - button "Add to cart" [ref=e87] [cursor=pointer]
        - generic [ref=e88]:
          - button [ref=e89] [cursor=pointer]:
            - button [ref=e90]:
              - img [ref=e91]
          - link "Sample Sunglass Name" [ref=e93]:
            - /url: /ecommerce/product-details?id=6
            - img "Sample Sunglass Name" [ref=e94]
          - link "Sample Sunglass Name" [ref=e95]:
            - /url: /ecommerce/product-details?id=6
          - link "A sample description for the product." [ref=e96]:
            - /url: /ecommerce/product-details?id=6
          - generic [ref=e97]:
            - generic [ref=e98]: $256.45
            - button "Add to cart" [ref=e99] [cursor=pointer]
        - generic [ref=e100]:
          - button [ref=e101] [cursor=pointer]:
            - button [ref=e102]:
              - img [ref=e103]
          - link "Sample Jacket Name" [ref=e105]:
            - /url: /ecommerce/product-details?id=7
            - img "Sample Jacket Name" [ref=e106]
          - link "Sample Jacket Name" [ref=e107]:
            - /url: /ecommerce/product-details?id=7
          - link "A sample description for the product." [ref=e108]:
            - /url: /ecommerce/product-details?id=7
          - generic [ref=e109]:
            - generic [ref=e110]: $111.00
            - button "Add to cart" [ref=e111] [cursor=pointer]
        - generic [ref=e112]:
          - button [ref=e113] [cursor=pointer]:
            - button [ref=e114]:
              - img [ref=e115]
          - link "Sample Sunglass Name" [ref=e117]:
            - /url: /ecommerce/product-details?id=8
            - img "Sample Sunglass Name" [ref=e118]
          - link "Sample Sunglass Name" [ref=e119]:
            - /url: /ecommerce/product-details?id=8
          - link "A sample description for the product." [ref=e120]:
            - /url: /ecommerce/product-details?id=8
          - generic [ref=e121]:
            - generic [ref=e122]: $256.45
            - button "Add to cart" [ref=e123] [cursor=pointer]
        - generic [ref=e124]:
          - button [ref=e125] [cursor=pointer]:
            - button [ref=e126]:
              - img [ref=e127]
          - link "Sample T-Shirt Name" [ref=e129]:
            - /url: /ecommerce/product-details?id=9
            - img "Sample T-Shirt Name" [ref=e130]
          - link "Sample T-Shirt Name" [ref=e131]:
            - /url: /ecommerce/product-details?id=9
          - link "A sample description for the product." [ref=e132]:
            - /url: /ecommerce/product-details?id=9
          - generic [ref=e133]:
            - generic [ref=e134]: $56.45
            - button "Add to cart" [ref=e135] [cursor=pointer]
    - contentinfo [ref=e136]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - link "logo" [ref=e140]:
            - /url: https://qabrains.com
            - img "logo" [ref=e141]
          - paragraph [ref=e142]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e143]:
          - heading "QA Topics" [level=3] [ref=e144]
          - paragraph [ref=e145]: No featured topics available
        - generic [ref=e146]:
          - heading "Quick Links" [level=3] [ref=e147]
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Discussion" [ref=e150]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e151]:
              - link "About Us" [ref=e152]:
                - /url: https://qabrains.com/about
            - listitem [ref=e153]:
              - link "Terms & Conditions" [ref=e154]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e155]:
              - link "Privacy Policy" [ref=e156]:
                - /url: https://qabrains.com/policy
        - generic [ref=e157]:
          - heading "Follow Us" [level=3] [ref=e158]
          - generic [ref=e159]:
            - link [ref=e160]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e161]
            - link [ref=e163]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e164]
            - link [ref=e168]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e169]
          - generic [ref=e172]:
            - heading "For Support" [level=3] [ref=e173]
            - link "support@qabrains.com" [ref=e174]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e176]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e177]:
        - img [ref=e179]
        - generic [ref=e182]: Added to cart
  - alert [ref=e183]
```

# Test source

```ts
  1   | import { test, expect } from "@fixtures/fixtures";
  2   | 
  3   | test.describe("Cart Functionality Tests", () => {
  4   |   test("[@regression] Verify adding product to cart", async ({
  5   |     loggedInPage,
  6   |     homePage,
  7   |     cartPage,
  8   |   }) => {
  9   |     const productName = "Sample Trouser Name";
  10  |     const productPrice = "$72.00";
  11  | 
  12  |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  13  | 
  14  |     await test.step("Add product to cart", async () => {
  15  |       await homePage.addProductToCart(productName, productPrice);
  16  |     });
  17  |     await test.step("Verify product is added to cart", async () => {
  18  |       await expect(homePage.getRemoveButton(productName)).toBeVisible();
> 19  |       await expect(headerPage.getItemCountInCart()).toHaveText("1");
      |                    ^ ReferenceError: headerPage is not defined
  20  |     });
  21  |     await test.step("Verify product details in cart", async () => {
  22  |       await headerPage.clickOnCartButton();
  23  |       await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty
  24  | 
  25  |       const cartItem = cartPage.getProductsInCart(productName, productPrice);
  26  |       await expect(cartItem).toHaveCount(1);
  27  |       await expect(cartItem).toBeVisible();
  28  |     });
  29  |   });
  30  |   test("[@regression] Remove product from cart", async ({
  31  |     loggedInPage,
  32  |     homePage,
  33  |     headerPage,
  34  |     cartPage,
  35  |   }) => {
  36  |     const productName = "Sample Trouser Name";
  37  |     const productPrice = "$72.00";
  38  | 
  39  |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  40  | 
  41  |     await test.step("Add product to cart", async () => {
  42  |       await homePage.addProductToCart(productName, productPrice);
  43  |     });
  44  |     await test.step("Verify product is added to cart", async () => {
  45  |       await expect(homePage.getRemoveButton(productName)).toBeVisible();
  46  |       await expect(headerPage.getItemCountInCart()).toHaveText("1");
  47  |     });
  48  |     await test.step("Verify product details in cart", async () => {
  49  |       await headerPage.clickOnCartButton();
  50  |       await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty
  51  | 
  52  |       const cartItem = cartPage.getProductsInCart(productName, productPrice);
  53  |       await expect(cartItem).toHaveCount(1);
  54  |       await expect(cartItem).toBeVisible();
  55  |     });
  56  |     await test.step("Remove product from cart and verify", async () => {
  57  |       await cartPage.removeFromCart(productName, productPrice);
  58  |       await expect(cartPage.cartList.first()).not.toBeVisible(); // Verify cart is empty
  59  |       await expect(cartPage.getEmptyCartMessage()).toBeVisible(); // Verify empty cart message is visible
  60  |     });
  61  |   });
  62  | 
  63  |   test("[@regression] Verify adding multiple products to cart and total price calculation", async ({
  64  |     loggedInPage,
  65  |     homePage,
  66  |     headerPage,
  67  |     cartPage,
  68  |   }) => {
  69  |     const products = [
  70  |       { name: "Sample Shoe Name", price: "$89.00" },
  71  |       { name: "Sample Shirt Name", price: "$49.99" },
  72  |     ];
  73  |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  74  | 
  75  |     await test.step("Add multiple products to cart", async () => {
  76  |       for (const product of products) {
  77  |         console.log(
  78  |           `Adding product: ${product.name} with price: ${product.price}`,
  79  |         );
  80  | 
  81  |         await homePage.addProductToCart(product.name, product.price);
  82  |         await expect(homePage.getRemoveButton(product.name)).toBeVisible();
  83  |       }
  84  |       await expect(headerPage.getItemCountInCart()).toHaveText(
  85  |         products.length.toString(),
  86  |       );
  87  |     });
  88  |     await test.step("Verify products in cart", async () => {
  89  |       await headerPage.clickOnCartButton();
  90  |       await expect(cartPage.cartItems.first()).toBeVisible();
  91  | 
  92  |       await expect(cartPage.getProductCountInCart()).toHaveCount(
  93  |         products.length,
  94  |       );
  95  |       await cartPage.removeFromCart(products[0].name, products[0].price);
  96  |       await expect(cartPage.getProductCountInCart()).toHaveCount(
  97  |         products.length - 1,
  98  |       );
  99  |     });
  100 |     await test.step("Verify product count in the cart in the header ", async () => {
  101 |       await expect(headerPage.getItemCountInCart()).toHaveText(
  102 |         (products.length - 1).toString(),
  103 |       );
  104 |     });
  105 |   });
  106 | });
  107 | 
```