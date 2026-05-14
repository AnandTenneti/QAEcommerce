# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> Login Tests >> Invalid Login Scenarios >> Invalid Username and Password
- Location: tests/LoginPageTest.spec.js:39:11

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: undefined
Received array: ["Neither email nor password matched."]
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
                  - text: Password12
                - button [ref=e41] [cursor=pointer]:
                  - img [ref=e42]
              - paragraph [ref=e48]: Password is incorrect.
          - button "Login" [ref=e49] [cursor=pointer]:
            - text: Login
            - img [ref=e50]
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e52]:
        - img [ref=e54]
        - generic [ref=e57]: Neither email nor password matched.
  - alert [ref=e58]
```

# Test source

```ts
  1  | import { test, expect } from "@fixtures/fixtures";
  2  | import testData from "@testdata/testData_1.json";
  3  | 
  4  | const errorMessages = {
  5  |   invalidPassword: "Username matched but password is incorrect.",
  6  |   invalidUsername: "Password matched but email is incorrect.",
  7  |   invalidUsernameAndPassword: "Neither email nor password matched.",
  8  | };
  9  | 
  10 | test.describe("Login Tests", () => {
  11 |   test("Login with valid credentials", async ({ loggedInPage, headerPage }) => {
  12 |     await expect(loggedInPage).toHaveURL(/\/ecommerce$/);
  13 | 
  14 |     await headerPage.logout();
  15 | 
  16 |     await expect(loggedInPage).toHaveURL(/\/ecommerce\/login$/);
  17 |   });
  18 | 
  19 |   test.describe("Invalid Login Scenarios", () => {
  20 |     const scenarios = [
  21 |       {
  22 |         name: "Invalid Password",
  23 |         data: testData.invalidPassword[0],
  24 |         expectedError: errorMessages.invalidPassword,
  25 |       },
  26 |       {
  27 |         name: "Invalid Username",
  28 |         data: testData.invalidUserName[0],
  29 |         expectedError: errorMessages.invalidUsername,
  30 |       },
  31 |       {
  32 |         name: "Invalid Username and Password",
  33 |         data: testData.invalidUserNameAndPassword[0],
  34 |         expectedError: errorMessages.invalidUserNameAndPassword,
  35 |       },
  36 |     ];
  37 | 
  38 |     for (const scenario of scenarios) {
  39 |       test(scenario.name, async ({ loginPage }) => {
  40 |         await loginPage.goToApplicationLoginPage("/ecommerce/login");
  41 | 
  42 |         await loginPage.login(scenario.data.username, scenario.data.password);
  43 | 
  44 |         const errors = await loginPage.getErrorMessages();
  45 | 
> 46 |         expect(errors).toContain(scenario.expectedError);
     |                        ^ Error: expect(received).toContain(expected) // indexOf
  47 |       });
  48 |     }
  49 |   });
  50 | });
  51 | 
  52 | // let { username, password } = testData.invalidPassword[0];
  53 | // test("Login with invalid password", async ({ loginPage }) => {
  54 | //   await loginPage.goToApplicationLoginPage("/ecommerce/login");
  55 | //   await loginPage.login(username, password);
  56 | //   await expect(loginPage.errorMessages).toContainText(
  57 | //     errorMessages.invalidPassword,
  58 | //   );
  59 | // });
  60 | // ({ username, password } = testData.invalidUserName[0]);
  61 | // test("Login with invalid username", async ({ loginPage }) => {
  62 | //   await loginPage.goToApplicationLoginPage("/ecommerce/login");
  63 | //   await loginPage.login(username, password);
  64 | //   await expect(loginPage.errorMessages).toContainText(
  65 | //     errorMessages.invalidUsername,
  66 | //   );
  67 | // });
  68 | 
```