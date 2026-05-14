# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> Login with invalid credentials
- Location: tests/LoginPageTest.spec.js:20:5

# Error details

```
ReferenceError: expect is not defined
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
  10 | 
  11 |   }
  12 | 
  13 |   async goToApplicationLoginPage() {
  14 |     await this.page.goto("/ecommerce/login");
  15 |   }
  16 | 
  17 |   async login(username, password) {
  18 |     await this.usernameInput.fill(username);
  19 |     await this.passwordInput.fill(password);
  20 |     await Promise.all([
  21 |       //   this.page.waitForURL("/ecommerce"),
  22 |       this.loginButton.click(),
  23 |     ]);
  24 |   }
  25 | async assertErrorMessage(expectedMessage) {
> 26 |     await expect(this.errorMessages).toContainText(expectedMessage);
     |     ^ ReferenceError: expect is not defined
  27 |   }
  28 | 
  29 |   // Optional: if you really need raw data
  30 |   async getErrorMessages() {
  31 |     return await this.errorMessages.allTextContents();
  32 |   }
  33 | 
  34 |  
  35 |  
  36 |   
  37 | }
  38 | 
```