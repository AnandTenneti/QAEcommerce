import { Common } from "@utils/Common";
export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartList = page.locator("div.cart-list");
    this.cartItems = this.cartList.locator(":scope > div");
    this.removeLink = page.getByRole("button", { name: "Remove" });
    this.removeButtonInDialog = page.locator(
      "//button[@data-slot='dialog-close' and text()='Remove']",
    );
    this.productQuantity = page.locator(
      "//div[contains(@class, 'cart-list')]//span",
    );
    this.productPrice = page.locator(
      "//p[text()='Price']/following-sibling::p",
    );
    this.totalPrice = page.locator("//p[text()='Total']/following-sibling::p");
    this.continueShopping = page.getByRole("button", {
      name: "Continue Shopping",
    });
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.productName = page.locator("//div[contains(@class, 'cart-list')]//h3");

    this.emptyCartMessage = page.locator("//h1[text()='Your cart is empty.']");
  }

  getEmptyCartMessage() {
    return this.emptyCartMessage;
  }
  getProductCountInCart() {
    return this.cartItems;
  }

  // async clickOnRemove() {
  //   await this.removeLink.click();
  //   await this.page.waitForSelector('[data-slot="dialog-close"]');
  //   const removeBtn = this.page
  //     .locator('[data-slot="dialog-close"]')
  //     .filter({ hasText: "Remove" });
  //   await removeBtn.click();
  // }
  async removeFromCart(productName, price) {
    const cartItem = this.cartItems
      .filter({ hasText: productName })
      .filter({ has: this.page.locator(`text=${price}`) });
    await cartItem.getByRole("button", { name: "Remove" }).click();
    await this.page.waitForSelector('[data-slot="dialog-close"]');
    const removeBtn = this.page
      .locator('[data-slot="dialog-close"]')
      .filter({ hasText: "Remove" });
    await removeBtn.click();
  }

  getProductQuantity() {
    return this.productQuantity;
  }

  getProductPrice() {
    return this.productPrice;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  async clickOnProductCheckout() {
    await this.checkoutButton.click();
  }

  async getQuantityValue() {
    const text = await this.getProductQuantity().textContent();
    return parseInt(text.trim(), 10);
  }

  async getPriceValue() {
    const text = await this.getProductPrice().textContent();
    return Common.roundingNumber(text, "$");
  }

  async getTotalValue() {
    const text = await this.getTotalPrice().textContent();
    return Common.roundingNumber(text, "$");
  }
  getProductName() {
    return this.productName;
  }

  getProductsInCart(productName, price) {
    return this.cartItems
      .filter({ hasText: productName })
      .filter({ has: this.page.locator(`text=${price}`) });
  }
  getTotalPriceForProduct(productName) {
    return this.cartItems
      .filter({ hasText: productName })
      .locator("//p[text()='Total']/following-sibling::p");
  }
  async getAllProductTotals() {
  const texts = await this.page
    .locator(".cart-item")
    .locator("text=Total")
    .locator("xpath=following-sibling::p")
    .allTextContents();

  return texts.map(t => parseFloat(t.replace("$", "")));
}

}
