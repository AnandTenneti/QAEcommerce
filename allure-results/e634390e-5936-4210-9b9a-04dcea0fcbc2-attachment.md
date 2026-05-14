# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/CartTest.spec.js >> Cart Functionality Tests >> [@regression] Verify adding product to cart
- Location: tests/cart/CartTest.spec.js:4:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

```
Error: page.screenshot: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test as base,expect } from "@fixtures/baseTest";
  2  | 
  3  | export const test = base;
  4  | export { expect };
  5  | 
  6  | test.afterEach(async ({ page }, testInfo) => {
  7  |   if (testInfo.status !== testInfo.expectedStatus) {
  8  |     const path = `screenshots/${testInfo.title}.png`;
  9  | 
> 10 |     await page.screenshot({ path, fullPage: true });
     |                ^ Error: page.screenshot: Target page, context or browser has been closed
  11 | 
  12 |     await testInfo.attach("screenshot", {
  13 |       path,
  14 |       contentType: "image/png",
  15 |     });
  16 |   }
  17 | });
```