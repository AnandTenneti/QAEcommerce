import { OrderByOptions } from "../constants/OrderByOptions";
import { test, expect } from "./fixtures";
import { HomePage } from "../pages/HomePage";
import { HeaderPage } from "../pages/HeaderPage";
import { CartPage } from "../pages/CartPage";
import { FavoritesPage } from "../pages/FavoritesPage";
test.afterEach(async ({ headerPage }) => {
  await headerPage.logout();
});

test("[@favorites_1] Verify empty favorites state and product addition behavior", async ({
  loggedInPage,
  homePage,
  headerPage,
  favoritesPage,
}) => {
  await test.step("Navigate to Favorites and verify empty state", async () => {
    await headerPage.clickOnFavorite();
    await expect(loggedInPage).toHaveURL(/favorite/);
    await expect(favoritesPage.getMessage()).toContainText(
      "You have no favorite products",
    );
  });

  await test.step("Navigate back to Home page", async () => {
    await headerPage.clickOnLogo();
  });

  await test.step("Mark a product as favorite", async () => {
    await homePage.markProductAsFavorite("Sample Trouser Name");
  });

  await test.step("Verify product appears in Favorites", async () => {
    await headerPage.clickOnFavorite();
    expect(await favoritesPage.getProducts()).toHaveCount(1);
  });
  await loggedInPage.waitForTimeout(3000);
});
