# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login/LoginTest.spec.js >> Login Tests >> [@smoke] Valid Login
- Location: tests/login/LoginTest.spec.js:6:7

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://practice.qabrains.com/ecommerce/login", waiting until "load"

```

# Test source

```ts
  1  | export class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.usernameInput = page.getByRole("textbox", { name: "email" });
  5  |     this.passwordInput = page.getByLabel("Password", { name: "password" });
  6  |     this.loginButton = page.locator("//button[@type='submit' and text()='Login']",
  7  |     );
  8  |     this.errorMessages = page.locator("div[data-title]");
  9  |   }
  10 | 
  11 |   async goToApplicationLoginPage() {
> 12 |     await this.page.goto("/ecommerce/login");
     |                     ^ Error: page.goto: Test ended.
  13 |   }
  14 | 
  15 |   async login(username, password) {
  16 |     await this.usernameInput.fill(username);
  17 |     await this.passwordInput.fill(password);
  18 |     await this.loginButton.click();
  19 |   }
  20 |  async getErrorMessages() {
  21 |     await this.page.waitForSelector("div[data-title]", { timeout: 5000 });
  22 |   return await this.errorMessages.allTextContents();
  23 | }
  24 | 
  25 |  
  26 |  
  27 |   
  28 | }
  29 | 
```