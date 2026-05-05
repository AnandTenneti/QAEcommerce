import { LoginPage } from "@pages/LoginPage";

export const authFixtures = {
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToApplicationLoginPage();
    await loginPage.login("test@qabrains.com", "Password123");
    await use(page);
  },
};
