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
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
          - /url: /ecommerce
          - img "logo" [ref=e7]
          - generic [ref=e8]: (Practice Site)
        - generic [ref=e9]:
          - button [ref=e10] [cursor=pointer]:
            - img [ref=e11]
          - button "practice@qabrains.com" [ref=e13] [cursor=pointer]:
            - img [ref=e14]
            - generic [ref=e16]: practice@qabrains.com
            - img [ref=e18]
    - generic [ref=e20]:
      - generic [ref=e21]:
        - heading "Products" [level=3] [ref=e22]
        - generic [ref=e23]:
          - paragraph [ref=e24]: Order by
          - combobox [ref=e25] [cursor=pointer]:
            - text: Select...
            - img
      - generic [ref=e26]:
        - generic [ref=e27]:
          - button [ref=e28] [cursor=pointer]:
            - button [ref=e29]:
              - img [ref=e30]
          - link "Sample Shirt Name" [ref=e32] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
            - img "Sample Shirt Name"
          - link "Sample Shirt Name" [ref=e33] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - link "A sample description for the product." [ref=e34] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - generic [ref=e35]:
            - generic [ref=e36]: $49.99
            - button "Add to cart" [ref=e37] [cursor=pointer]
        - generic [ref=e38]:
          - button [ref=e39] [cursor=pointer]:
            - button [ref=e40]:
              - img [ref=e41]
          - link "Sample Shoe Name" [ref=e43] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
            - img "Sample Shoe Name" [ref=e44]
          - link "Sample Shoe Name" [ref=e45] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - link "A sample description for the product." [ref=e46] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - generic [ref=e47]:
            - generic [ref=e48]: $89.00
            - button "Add to cart" [ref=e49] [cursor=pointer]
        - generic [ref=e50]:
          - button [ref=e51] [cursor=pointer]:
            - button [ref=e52]:
              - img [ref=e53]
          - link "Sample Jacket Name" [ref=e55] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - img "Sample Jacket Name" [ref=e56]
          - link "Sample Jacket Name" [ref=e57] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - link "A sample description for the product." [ref=e58] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - generic [ref=e59]:
            - generic [ref=e60]: $129.50
            - button "Add to cart" [ref=e61] [cursor=pointer]
        - generic [ref=e62]:
          - button [ref=e63] [cursor=pointer]:
            - button [ref=e64]:
              - img [ref=e65]
          - link "Sample Trouser Name" [ref=e67] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - img "Sample Trouser Name"
          - link "Sample Trouser Name" [ref=e68] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - link "A sample description for the product." [ref=e69] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - generic [ref=e70]:
            - generic [ref=e71]: $72.00
            - button "Add to cart" [ref=e72] [cursor=pointer]
        - generic [ref=e73]:
          - button [ref=e74] [cursor=pointer]:
            - button [ref=e75]:
              - img [ref=e76]
          - link "Sample T-Shirt Name" [ref=e78] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e79] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - link "A sample description for the product." [ref=e80] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - generic [ref=e81]:
            - generic [ref=e82]: $45.00
            - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button [ref=e85] [cursor=pointer]:
            - button [ref=e86]:
              - img [ref=e87]
          - link "Sample Sunglass Name" [ref=e89] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - img "Sample Sunglass Name" [ref=e90]
          - link "Sample Sunglass Name" [ref=e91] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - link "A sample description for the product." [ref=e92] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - generic [ref=e93]:
            - generic [ref=e94]: $256.45
            - button "Add to cart" [ref=e95] [cursor=pointer]
        - generic [ref=e96]:
          - button [ref=e97] [cursor=pointer]:
            - button [ref=e98]:
              - img [ref=e99]
          - link "Sample Jacket Name" [ref=e101] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - img "Sample Jacket Name"
          - link "Sample Jacket Name" [ref=e102] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - link "A sample description for the product." [ref=e103] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - generic [ref=e104]:
            - generic [ref=e105]: $111.00
            - button "Add to cart" [ref=e106] [cursor=pointer]
        - generic [ref=e107]:
          - button [ref=e108] [cursor=pointer]:
            - button [ref=e109]:
              - img [ref=e110]
          - link "Sample Sunglass Name" [ref=e112] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - img "Sample Sunglass Name" [ref=e113]
          - link "Sample Sunglass Name" [ref=e114] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - link "A sample description for the product." [ref=e115] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - generic [ref=e116]:
            - generic [ref=e117]: $256.45
            - button "Add to cart" [ref=e118] [cursor=pointer]
        - generic [ref=e119]:
          - button [ref=e120] [cursor=pointer]:
            - button [ref=e121]:
              - img [ref=e122]
          - link "Sample T-Shirt Name" [ref=e124] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e125] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - link "A sample description for the product." [ref=e126] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - generic [ref=e127]:
            - generic [ref=e128]: $56.45
            - button "Add to cart" [ref=e129] [cursor=pointer]
    - contentinfo [ref=e130]:
      - generic [ref=e132]:
        - generic [ref=e133]:
          - link "logo":
            - /url: https://qabrains.com
            - img "logo"
          - paragraph [ref=e134]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e135]:
          - heading "QA Topics" [level=3] [ref=e136]
          - paragraph [ref=e137]: No featured topics available
        - generic [ref=e138]:
          - heading "Quick Links" [level=3] [ref=e139]
          - list [ref=e140]:
            - listitem [ref=e141]:
              - link "Discussion" [ref=e142] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e143]:
              - link "About Us" [ref=e144] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e145]:
              - link "Terms & Conditions" [ref=e146] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e147]:
              - link "Privacy Policy" [ref=e148] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e149]:
          - heading "Follow Us" [level=3] [ref=e150]
          - generic [ref=e151]:
            - link [ref=e152] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e153]
            - link [ref=e155] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e156]
            - link [ref=e159] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e160]
          - generic [ref=e163]:
            - heading "For Support" [level=3] [ref=e164]
            - link "support@qabrains.com" [ref=e165] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e167]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e168]
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