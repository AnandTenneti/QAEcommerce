import { test, expect } from "@hooks/testHooks";

test("[@regression] Verify empty favorites state and product addition behavior", async ({
  loggedInPage,
  homePage,
  headerPage,
  favoritesPage,
}) => {
  await test.step("Navigate to Favorites and verify empty state", async () => {
    await headerPage.clickOnFavorite();
    await expect(loggedInPage).toHaveURL(/\/favorites$/);
    await expect(favoritesPage.getMessage()).toContainText(
      "You have no favorite products",
    );
  });

  await test.step("Refresh the page and verify empty state persists", async () => {
    await loggedInPage.reload();
    await expect(favoritesPage.getMessage()).toContainText(
      "You have no favorite products",
    );
  });

  await test.step("Navigate back to Home page", async () => {
    await headerPage.clickOnLogo();
  });

  await test.step("Mark a product as favorite", async () => {
    await homePage.markProductAsFavorite("Sample Trouser Name");
    const favButton = homePage.favoritedButton("Sample Trouser Name");
    await expect(favButton).toHaveCSS("color", "rgb(255, 0, 0)");
  });

  await test.step("Verify product appears in Favorites", async () => {
    await headerPage.clickOnFavorite();
    await expect(favoritesPage.getProducts()).toHaveCount(1);
  });
  await test.step("Refresh the Favorites page and verify product is still present", async () => {
    await loggedInPage.reload();
    await expect(favoritesPage.getProducts()).toHaveCount(1);
  });
});
