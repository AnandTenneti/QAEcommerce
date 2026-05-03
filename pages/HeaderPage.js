export class HeaderPage {
  constructor(page) {
    this.page = page;
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
    this.logutButtonInDialog = page.getByRole("button", { name: "Logout" });
    this.itemCountInCart = page.locator("//span[@role='button']/span[text()]");
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
    await this.page.waitForSelector('[data-slot="dialog-close"]');
    const logoutBtn = this.page
      .locator('[data-slot="dialog-close"]')
      .filter({ hasText: "Logout" });
    await logoutBtn.click();
  }

  async clickOnCartButton() {
    await this.cartButton.click();
  }

  getItemCountInCart() {
    return this.itemCountInCart;
  }
}
