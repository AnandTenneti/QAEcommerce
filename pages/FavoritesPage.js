export class FavoritesPage {
  constructor(page) {
    this.page = page;
    this.message = page.locator(
      "//h2[normalize-space(text())='You have no favorite products']",
    );
    this.favoriteProducts = page.locator("div.products.grid  div a>img");
  }

  getMessage() {
    return this.message;
  }

  getProducts() {
    return this.favoriteProducts;
  }
}
