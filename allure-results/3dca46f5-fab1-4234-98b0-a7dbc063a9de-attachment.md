# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login/LoginTest.spec.js >> Login Tests >> [@smoke] Valid Login
- Location: tests/login/LoginTest.spec.js:6:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/ecommerce$/
Received string:  "https://practice.qabrains.com/ecommerce/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://practice.qabrains.com/ecommerce/login"

```

# Page snapshot

```yaml
- generic [active]:
  - region "Notifications alt+T"
  - alert [ref=e1]
```

# Test source

```ts
  1  | import { test, expect } from "@hooks/testHooks";
  2  | import testData from "@testdata/testData_1.json";
  3  | import { errorMessages } from "@constants/errorMessages";
  4  | 
  5  | test.describe("Login Tests", () => {
  6  |   test("[@smoke] Valid Login", async ({ loggedInPage, headerPage }) => {
> 7  |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
     |                                ^ Error: expect(page).toHaveURL(expected) failed
  8  | 
  9  |     await headerPage.logout();
  10 | 
  11 |     await expect(loggedInPage).toHaveURL(/\/ecommerce\/login$/);
  12 |   });
  13 | 
  14 |   const scenarios = [
  15 |     {
  16 |       name: "Invalid Password",
  17 |       data: testData.invalidPassword[0],
  18 |       expectedError: errorMessages.invalidPassword,
  19 |     },
  20 |     {
  21 |       name: "Invalid Username",
  22 |       data: testData.invalidUserName[0],
  23 |       expectedError: errorMessages.invalidUsername,
  24 |     },
  25 |     {
  26 |       name: "Invalid Username and Password",
  27 |       data: testData.invalidUserNameAndPassword[0],
  28 |       expectedError: errorMessages.invalidUsernameAndPassword,
  29 |     },
  30 |   ];
  31 |   for (const scenario of scenarios) {
  32 |     test(`[@regression] ${scenario.name}`, async ({ loginPage }) => {
  33 |       await loginPage.goToApplicationLoginPage(/\/ecommerce\/login$/);
  34 |       await loginPage.login(scenario.data.username, scenario.data.password);
  35 |       const errors = await loginPage.getErrorMessages();
  36 |       expect(errors).toContain(scenario.expectedError);
  37 |     });
  38 |   }
  39 | });
  40 | 
```