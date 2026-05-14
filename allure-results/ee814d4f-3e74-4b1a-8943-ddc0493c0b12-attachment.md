# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven/login-data-driven.spec.js >> Data-Driven Login Tests >> Login test for student@qabrains.com
- Location: tests/datadriven/login-data-driven.spec.js:8:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://practice.qabrains.com/ecommerce"
Received: "https://practice.qabrains.com/ecommerce/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    5 × unexpected value "https://practice.qabrains.com/ecommerce/login"
    - waiting for" https://practice.qabrains.com/ecommerce/login" navigation to finish...
    - navigated to "https://practice.qabrains.com/ecommerce/login"
    2 × unexpected value "https://practice.qabrains.com/ecommerce/login"

```

# Page snapshot

```yaml
- generic [active]:
  - region "Notifications alt+T"
  - alert [ref=e1]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "@pages/LoginPage";
  3  | import { HeaderPage } from "@pages/HeaderPage";
  4  | import testData from "@testdata/users.json";
  5  | 
  6  | test.describe("Data-Driven Login Tests", () => {
  7  |   for (const { username, password } of testData) {
  8  |     test(`Login test for ${username}`, async ({ page }) => {
  9  |       const loginPage = new LoginPage(page);
  10 |       const headerPage = new HeaderPage(page);
  11 |       await page.goto("/ecommerce/login");
  12 |       await loginPage.login(username, password);
> 13 |       await expect(page).toHaveURL("/ecommerce");
     |                          ^ Error: expect(page).toHaveURL(expected) failed
  14 |       await headerPage.logout();
  15 |     });
  16 |   }
  17 | });
  18 | 
```