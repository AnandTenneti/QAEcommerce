export class HomePage {
  constructor(page) {
    this.page = page;
    this.productCard = page.locator("div.products.grid > div");
    this.orderByDropdown = page.getByRole("combobox", { type: "button" });
    this.orderByDropdownOption = page.getByRole("option");
    this.productPrices = page.locator("div.products.grid div>span.text-lg");
    this.favoriteButtons = page.locator(
      "//span/button[contains(@class,'cursor-pointer')]",
    );
    this.toastMessage = page.locator("//div[text()='Added to favorites']");
    this.removeFromButton = page.getByRole("button", {
      name: "Remove from cart",
    });
    this.addToCartBtn = page.getByRole("button", { name: "Add to cart" });
  }
  //this.noOfProducts = page.locator("div.products.grid a:nth-of-type(1)");

  getProducts() {
    return this.productCard;
  }

  async selectOrderByOption(option) {
    await this.orderByDropdown.click();
    await this.orderByDropdownOption.filter({ hasText: option }).click();
  }

  async getAllPrices() {
    const pricesText = await this.productPrices.allTextContents();
    console.log("Extracted prices:", pricesText);
    const prices = pricesText.map((p) => Number(p.replace(/[^0-9.]/g, "")));
    return prices;
  }
  async markProductAsFavorite(productName) {
    await this.productCard
      .filter({ hasText: productName })
      .locator("span > button.cursor-pointer")
      .click();
  }

  getProductCard(index) {
    return this.productCard.nth(index);
  }

  async getProductNameByIndex(index) {
    return await this.getProductCard(index)
      .getByRole("link")
      .nth(1)
      .innerText();
  }

  async clickOnProduct(productName) {
    await this.productCard.filter({ hasText: productName }).click();
  }
  async addProductToCart(productName) {
    await this.productCard
      .filter({ hasText: productName })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }
  async addProductToCart(productName, price) {
    const product = this.productCard
      .filter({ hasText: productName })
      .filter({ hasText: price });

    product.getByRole("button", { name: "Add to cart" }).click();
  }

  async clickOnProductByIndex(index) {
    const count = await this.productCard.count();
    if (index >= count) {
      throw new Error(
        `Index ${index} is out of range. Total products: ${count}`,
      );
    }
    await this.productCard.nth(index).click();
  }

  async isToastMessageVisible() {
    return await this.toastMessage.isVisible();
  }

  getStyledFavoriteButton(productName) {
    return this.productCard
      .filter({ hasText: productName })
      .locator("button[style]");
  }

  // async verifyButtonText(productName) {
  //   return await this.page
  //     .locator("div.products.grid > div")
  //     .filter({ hasText: productName });
  //   return await product
  //     .getByRole("button", { name: "Remove from cart" })
  //     .isVisible();
  // }

  async clickOnCartButton() {
    await page
      .locator("#ecommerce-header")
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .click();
  }

  getRemoveButton(productName) {
    return this.productCard
      .filter({ hasText: productName })
      .locator("button:has-text('Remove from cart')");
  }
}
