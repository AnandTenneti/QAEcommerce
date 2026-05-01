import { Common } from "../utils/Common";
export class CartPage {
  constructor(page) {
    this.page = page;
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
  }

  async clickOnRemove() {
    await this.removeLink.click();
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
}
