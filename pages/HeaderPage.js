export class HeaderPage {
  constructor(page) {
    this.page = page;
    //this.cartButton = page.getByRole("button", {name})
    this.userButton = page.locator("//button/child::span[text()]");
    this.cartButton = page.locator("div.profile>span[role='button']");
    this.userNameButton = page.locator(
      "//span[starts-with(@class,'user-name')]",
    );
    this.FavoritesButton = page.getByRole("menuitem", { name: "Favorites" });
    this.cartButton1 = page.locator(
      "//div[starts-with(@class,'profile')]/span[@role='button']",
    );
    this.logoButton = page.locator("#ecommerce-header>div div a");
    this.logoutButton = page.locator("//*[text()='Log out']");
    //this.logoutButton = page.locator("//button[text()='Log out']");
  }

  async clickOnFavorite() {
    await this.userNameButton.click();
    await this.FavoritesButton.click();
  }

  async clickOnLogo() {
    await this.logoButton.click();
  }

  async logout() {
    await this.userNameButton.click();
    await this.logoutButton.click();
  }

  async clickOnCartButton() {
    await this.cartButton.click();
  }
}
