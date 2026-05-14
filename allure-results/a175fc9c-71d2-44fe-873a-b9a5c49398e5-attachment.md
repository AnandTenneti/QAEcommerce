# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login/LoginTest.spec.js >> Login Tests >> [@regression] Invalid Login Scenarios >> Invalid Username
- Location: tests/login/LoginTest.spec.js:36:11

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: undefined
Received array: ["Password matched but email is incorrect."]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
        - /url: /ecommerce
        - img "logo" [ref=e7]
        - generic [ref=e8]: (Practice Site)
    - generic [ref=e10]:
      - link "Back to home" [ref=e11] [cursor=pointer]:
        - /url: /
        - img [ref=e12]
        - text: Back to home
      - generic [ref=e14]:
        - heading "Login" [level=2] [ref=e15]
        - alert [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - heading "Accepted email:" [level=4] [ref=e19]
              - list [ref=e20]:
                - listitem [ref=e21]: test@qabrains.com
                - listitem [ref=e22]: practice@qabrains.com
                - listitem [ref=e23]: student@qabrains.com
            - generic [ref=e24]:
              - heading "Password:" [level=4] [ref=e25]
              - list [ref=e26]:
                - listitem [ref=e27]: Password123
                - listitem [ref=e28]: Password123
                - listitem [ref=e29]: Password123
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: Email*
              - textbox "Email*" [ref=e35]:
                - /placeholder: eg. user@user.com
                - text: invalid@qabrains.com
              - paragraph [ref=e36]: Username is incorrect.
            - generic [ref=e37]:
              - generic [ref=e38]: Password*
              - generic [ref=e39]:
                - textbox "Password*" [ref=e40]:
                  - /placeholder: "*******"
                  - text: Password123
                - button [ref=e41] [cursor=pointer]:
                  - img [ref=e42]
          - button "Login" [ref=e48] [cursor=pointer]:
            - text: Login
            - img [ref=e49]
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e51]:
        - img [ref=e53]
        - generic [ref=e56]: Password matched but email is incorrect.
  - alert [ref=e57]
```

# Test source

```ts
  1  | import { test, expect } from "@fixtures/fixtures";
  2  | import testData from "@testdata/testData_1.json";
  3  | import errorMessages from "@constants/errorMessages";
  4  | 
  5  | test.describe("Login Tests", () => {
  6  |   test("[@regression] Login with valid credentials", async ({
  7  |     loggedInPage,
  8  |     headerPage,
  9  |   }) => {
  10 |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  11 | 
  12 |     await headerPage.logout();
  13 | 
  14 |     await expect(loggedInPage).toHaveURL(/\/ecommerce\/login$/);
  15 |   });
  16 | 
  17 |   test.describe("[@regression] Invalid Login Scenarios", () => {
  18 |     const scenarios = [
  19 |       {
  20 |         name: "Invalid Password",
  21 |         data: testData.invalidPassword[0],
  22 |         expectedError: errorMessages.invalidPassword,
  23 |       },
  24 |       {
  25 |         name: "Invalid Username",
  26 |         data: testData.invalidUserName[0],
  27 |         expectedError: errorMessages.invalidUsername,
  28 |       },
  29 |       {
  30 |         name: "Invalid Username and Password",
  31 |         data: testData.invalidUserNameAndPassword[0],
  32 |         expectedError: errorMessages.invalidUsernameAndPassword,
  33 |       },
  34 |     ];
  35 |     for (const scenario of scenarios) {
  36 |       test(scenario.name, async ({ loginPage }) => {
  37 |         await loginPage.goToApplicationLoginPage(/\/ecommerce\/login$/);
  38 |         await loginPage.login(scenario.data.username, scenario.data.password);
  39 |         const errors = await loginPage.getErrorMessages();
> 40 |         expect(errors).toContain(scenario.expectedError);
     |                        ^ Error: expect(received).toContain(expected) // indexOf
  41 |       });
  42 |     }
  43 |   });
  44 | });
  45 | 
```