# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven/DataDrivenTests.spec.js >> Login test for student@qabrains.com
- Location: tests/datadriven/DataDrivenTests.spec.js:20:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://practice.qabrains.com/ecommerce"
Received: "https://practice.qabrains.com/ecommerce/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://practice.qabrains.com/ecommerce/login"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "@pages/LoginPage";
  3  | import { HeaderPage } from "@pages/HeaderPage";
  4  | 
  5  | const testData = [
  6  |   { username: "test@qabrains.com", password: "Password123" },
  7  |   { username: "practice@qabrains.com", password: "Password123" },
  8  |   { username: "student@qabrains.com", password: "Password123" },
  9  | ];
  10 | test.beforeEach(async ({ page }) => {
  11 |   // setup code here
  12 |   await page.goto("/ecommerce/login");
  13 | });
  14 | 
  15 | test.afterEach(async ({ page }) => {
  16 |   // setup code here
  17 |   await page.close();
  18 | });
  19 | testData.forEach(({ username, password }) => {
  20 |   test(`Login test for ${username}`, async ({ page }) => {
  21 |     const loginPage = new LoginPage(page);
  22 |     const headerPage = new HeaderPage(page);
  23 |     await loginPage.login(username, password);
> 24 |     await expect(page).toHaveURL("/ecommerce");
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  25 |     await headerPage.logout();
  26 |   });
  27 | });
  28 | 
```