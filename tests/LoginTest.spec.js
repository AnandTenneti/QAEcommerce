import { test, expect } from "@fixtures/fixtures";
import testData from "@testdata/testData_1.json";

const errorMessages = {
  invalidPassword: "Username matched but password is incorrect.",
  invalidUsername: "Password matched but email is incorrect.",
  invalidUsernameAndPassword: "Neither email nor password matched.",
};

test.describe("Login Tests", () => {
  test("[@regression] Login with valid credentials", async ({
    loggedInPage,
    headerPage,
  }) => {
    await expect(loggedInPage).toHaveURL(/\/ecommerce$/);

    await headerPage.logout();

    await expect(loggedInPage).toHaveURL(/\/ecommerce\/login$/);
  });

  test.describe("[@regression] Invalid Login Scenarios", () => {
    const scenarios = [
      {
        name: "Invalid Password",
        data: testData.invalidPassword[0],
        expectedError: errorMessages.invalidPassword,
      },
      {
        name: "Invalid Username",
        data: testData.invalidUserName[0],
        expectedError: errorMessages.invalidUsername,
      },
      {
        name: "Invalid Username and Password",
        data: testData.invalidUserNameAndPassword[0],
        expectedError: errorMessages.invalidUsernameAndPassword,
      },
    ];
    for (const scenario of scenarios) {
      test(scenario.name, async ({ loginPage }) => {
        await loginPage.goToApplicationLoginPage(/\/ecommerce\/login$/);
        await loginPage.login(scenario.data.username, scenario.data.password);
        const errors = await loginPage.getErrorMessages();
        expect(errors).toContain(scenario.expectedError);
      });
    }
  });
});
