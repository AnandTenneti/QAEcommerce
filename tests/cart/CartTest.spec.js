import { test, expect } from "@fixtures/fixtures";

test.describe("Cart Functionality Tests", () => {
  test.afterEach(async ({ headerPage }) => {
    await headerPage.logout();
  });

  test("[@regression] Verify adding product to cart", async ({
    loggedInPage,
    homePage,
    headerPage,
    cartPage,
  }) => {
    const productName = "Sample Trouser Name";
    const productPrice = "$72.00";

    await expect(loggedInPage).toHaveURL(/\/ecommerce$/);

    await test.step("Add product to cart", async () => {
      await homePage.addProductToCart(productName, productPrice);
    });
    await test.step("Verify product is added to cart", async () => {
      await expect(homePage.getRemoveButton(productName)).toBeVisible();
      await expect(headerPage.getItemCountInCart()).toHaveText("1");
    });
    await test.step("Verify product details in cart", async () => {
      await headerPage.clickOnCartButton();
      await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty

      const cartItem = cartPage.getProductsInCart(productName, productPrice);
      await expect(cartItem).toHaveCount(1);
      await expect(cartItem).toBeVisible();
    });
  });
  test("[@regression] Remove product from cart", async ({
    loggedInPage,
    homePage,
    headerPage,
    cartPage,
  }) => {
    const productName = "Sample Trouser Name";
    const productPrice = "$72.00";

    await expect(loggedInPage).toHaveURL(/\/ecommerce$/);

    await test.step("Add product to cart", async () => {
      await homePage.addProductToCart(productName, productPrice);
    });
    await test.step("Verify product is added to cart", async () => {
      await expect(homePage.getRemoveButton(productName)).toBeVisible();
      await expect(headerPage.getItemCountInCart()).toHaveText("1");
    });
    await test.step("Verify product details in cart", async () => {
      await headerPage.clickOnCartButton();
      await expect(cartPage.cartList.first()).toBeVisible(); // Verify cart is not empty

      const cartItem = cartPage.getProductsInCart(productName, productPrice);
      await expect(cartItem).toHaveCount(1);
      await expect(cartItem).toBeVisible();
    });
    await test.step("Remove product from cart and verify", async () => {
      await cartPage.removeFromCart(productName, productPrice);
      await expect(cartPage.cartList.first()).not.toBeVisible(); // Verify cart is empty
      await expect(cartPage.getEmptyCartMessage()).toBeVisible(); // Verify empty cart message is visible
    });
  });

  test("[@regression] Verify adding multiple products to cart and total price calculation", async ({
    loggedInPage,
    homePage,
    headerPage,
    cartPage,
  }) => {
    const products = [
      { name: "Sample Shoe Name", price: "$89.00" },
      { name: "Sample Shirt Name", price: "$49.99" },
    ];
    await expect(loggedInPage).toHaveURL(/\/ecommerce$/);

    await test.step("Add multiple products to cart", async () => {
      for (const product of products) {
        console.log(
          `Adding product: ${product.name} with price: ${product.price}`,
        );

        await homePage.addProductToCart(product.name, product.price);
        await expect(homePage.getRemoveButton(product.name)).toBeVisible();
      }
      await expect(headerPage.getItemCountInCart()).toHaveText(
        products.length.toString(),
      );
    });
    await test.step("Verify products in cart", async () => {
      await headerPage.clickOnCartButton();
      await expect(cartPage.cartItems.first()).toBeVisible();

      await expect(cartPage.getProductCountInCart()).toHaveCount(
        products.length,
      );
      await cartPage.removeFromCart(products[0].name, products[0].price);
      await expect(cartPage.getProductCountInCart()).toHaveCount(
        products.length - 1,
      );
    });
    await test.step("Verify product count in the cart in the header ", async () => {
      await expect(headerPage.getItemCountInCart()).toHaveText(
        (products.length - 1).toString(),
      );
    });
  });
});
