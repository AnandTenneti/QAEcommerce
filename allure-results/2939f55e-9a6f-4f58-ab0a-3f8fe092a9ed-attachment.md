# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> Login with invalid credentials
- Location: tests/LoginPageTest.spec.js:15:5

# Error details

```
Error: toContainText can be only used with Locator object
```

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('div[data-title]').first() to be visible

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
                - text: test@qabrains.com
            - generic [ref=e36]:
              - generic [ref=e37]: Password*
              - generic [ref=e38]:
                - textbox "Password*" [ref=e39]:
                  - /placeholder: "*******"
                  - text: Password12
                - button [ref=e40] [cursor=pointer]:
                  - img [ref=e41]
          - button "Login" [disabled] [ref=e47]:
            - text: Login
            - img [ref=e52]
  - region "Notifications alt+T"
  - alert [ref=e54]
```

# Test source

```ts
  1  | export class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.usernameInput = page.getByRole("textbox", { name: "email" });
  5  |     this.passwordInput = page.getByLabel("Password", { name: "password" });
  6  |     this.loginButton = page.locator(
  7  |       "//button[@type='submit' and text()='Login']",
  8  |     );
  9  |     this.errorMessages = page.locator("div[data-title]");
  10 |   }
  11 | 
  12 |   async goToApplicationLoginPage() {
  13 |     await this.page.goto("/ecommerce/login");
  14 |   }
  15 | 
  16 |   async login(username, password) {
  17 |     await this.usernameInput.fill(username);
  18 |     await this.passwordInput.fill(password);
  19 |     await Promise.all([
  20 |       //   this.page.waitForURL("/ecommerce"),
  21 |       this.loginButton.click(),
  22 |     ]);
  23 |   }
  24 |   async getErrorMessages() {
> 25 |     await this.errorMessages.first().waitFor({ state: "visible" });
     |                                      ^ Error: locator.waitFor: Test ended.
  26 |     return await this.errorMessages.allTextContents();
  27 |   }
  28 | }
  29 | 
```