import { OrderByOptions } from "../constants/OrderByOptions";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.orderByDropdown = page.getByRole("combobox", { type: "button" });
    this.orderByDropdownOption = page.getByRole("option");
    this.noOfProducts = page.locator("div.products.grid a:nth-of-type(1)");
    //this.noOfProducts = page.locator('div.products.grid > div');

    this.productPrices = page.locator("div.products.grid div>span.text-lg");
    this.favoriteButtons = page.locator(
      "//span/button[contains(@class,'cursor-pointer')]",
    );
    this.toastMessage = page.locator("//div[text()='Added to favorites']");
    this.removeFromButton = page.getByRole("button", {
      name: "Remove from cart",
    });
  }

  getProducts() {
    return this.noOfProducts;
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
    await this.page
      .locator("div.products.grid > div")
      .filter({ hasText: productName })
      .locator("span > button.cursor-pointer")
      .click();
  }

 

  getProductCard(index) {
    return this.page.locator("div.products.grid > div").nth(index);
  }

  async getProductNameByIndex(index) {
    return await this.getProductCard(index)
      .getByRole("link")
      .nth(1)
      .innerText();
  }

  async clickOnProduct(productName) {
    await this.page
      .locator("div.products.grid > div")
      .filter({ hasText: productName })
      .click();
  }
  async addProductToCart(productName) {
    await this.page
      .locator("div.products.grid > div")
      .filter({ hasText: productName })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }
  async addProductToCart(productName, price) {
    await this.page
      .locator("div.products.grid > div")
      .filter({ hasText: productName })
      .filter({ hasText: price })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }

  async clickOnProductByIndex(index) {
    const count = await this.noOfProducts.count();
    if (index >= count) {
      throw new Error(
        `Index ${index} is out of range. Total products: ${count}`,
      );
    }
    await this.noOfProducts.nth(index).click();
  }

  async isToastMessageVisible() {
    return await this.toastMessage.isVisible();
  }

  async verifyButtonText(productName) {
    return await this.page
      .locator("div.products.grid > div")
      .filter({ hasText: productName });
    return await product
      .getByRole("button", { name: "Remove from cart" })
      .isVisible();
  }

  async clickOnCartButton() {
    await page
      .locator("#ecommerce-header")
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .click();
  }
}
