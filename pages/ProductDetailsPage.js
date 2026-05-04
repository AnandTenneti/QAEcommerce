export class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.productName = page.locator("//h1[text()]");
    this.productDescription = page.locator("//h1/following-sibling::p");
    this.productPrice = page.locator("//div[starts-with(@class,'text-xl')]");
    this.backToProductsLink = page.getByRole("button", {
      name: "Back to Products",
    });
    this.addQuantity = page.getByRole("button", { name: "+" });
    this.decreaseQuantity = page.getByRole("button", { name: "−" });
    this.quantity = page.locator("//input[@value]");
    this.addToCart = page.getByRole("button", { name: "Add to cart" });
  }

  getProductName() {
    return this.productName;
  }

  getProductDescription() {
    return this.productDescription;
  }

  getProductPrice() {
    return this.productPrice;
  }

  async clickOnBackToProducts() {
    await this.backToProductsLink.click();
  }

  async increaseProductQuantity() {
    await this.addQuantity.click();
  }

  async decreaseProductQuantity() {
    await this.decreaseQuantity.click();
  }

  getProductQuantity() {
    return this.quantity;
  }

  async addProductToCart() {
    await this.addToCart.click();
  }
}
