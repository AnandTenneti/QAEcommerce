import { LoginPage } from "@pages/LoginPage";
import { HeaderPage } from "@pages/HeaderPage";
import { HomePage } from "@pages/HomePage";
import { CartPage } from "@pages/CartPage";
import { ProductDetailsPage } from "@pages/ProductDetailsPage";
import { FavoritesPage } from "@pages/FavoritesPage";
import { CheckoutPage } from "@pages/CheckoutPage";

export const pageFixtures = ({
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
  }
});
