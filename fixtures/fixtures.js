import { LoginPage } from "@pages/LoginPage";
import { HeaderPage } from "@pages/HeaderPage";
import { HomePage } from "@pages/HomePage";
import { CartPage } from "@pages/CartPage";
import { ProductDetailsPage } from "@pages/ProductDetailsPage";
import { test as base, expect } from "@playwright/test";
import { FavoritesPage } from "@pages/FavoritesPage";
import { CheckoutPage } from "@pages/CheckoutPage";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  headerPage: async ({ page }, use) => {
    await use(new HeaderPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  favoritesPage: async ({ page }, use) => {
    await use(new FavoritesPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkOutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToApplicationLoginPage();
    await loginPage.login("test@qabrains.com", "Password123");
    await use(page);
  },
});
export { expect };
