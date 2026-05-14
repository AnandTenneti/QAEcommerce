# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FavoritesTest1.spec.js >> [@regression] Verify empty favorites state and product addition behavior
- Location: tests/FavoritesTest1.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - button "test@qabrains.com" [active] [ref=e13] [cursor=pointer]:
            - img [ref=e14]
            - generic [ref=e16]: test@qabrains.com
            - img [ref=e18]
    - generic [ref=e20]:
      - generic [ref=e21]:
        - heading "Favorites" [level=3] [ref=e22]
        - generic [ref=e23]:
          - paragraph [ref=e24]: Order by
          - combobox [ref=e25] [cursor=pointer]:
            - text: Select...
            - img
      - generic [ref=e28]:
        - button [ref=e29] [cursor=pointer]:
          - button [ref=e30]:
            - img [ref=e31]
        - link "Sample Trouser Name" [ref=e33] [cursor=pointer]:
          - /url: /ecommerce/product-details?id=4
          - img "Sample Trouser Name" [ref=e34]
        - link "Sample Trouser Name" [ref=e35] [cursor=pointer]:
          - /url: /ecommerce/product-details?id=4
        - link "A sample description for the product." [ref=e36] [cursor=pointer]:
          - /url: /ecommerce/product-details?id=4
        - generic [ref=e37]:
          - generic [ref=e38]: $72.00
          - button "Add to cart" [ref=e39] [cursor=pointer]
    - contentinfo [ref=e40]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - link "logo" [ref=e44] [cursor=pointer]:
            - /url: https://qabrains.com
            - img "logo" [ref=e45]
          - paragraph [ref=e46]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e47]:
          - heading "QA Topics" [level=3] [ref=e48]
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Web Testing" [ref=e51] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e52]:
              - link "Interview Questions" [ref=e53] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e54]:
              - link "Testing Framework" [ref=e55] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e56]:
              - link "See more" [ref=e57] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e59]
        - generic [ref=e61]:
          - heading "Quick Links" [level=3] [ref=e62]
          - list [ref=e63]:
            - listitem [ref=e64]:
              - link "Discussion" [ref=e65] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e66]:
              - link "About Us" [ref=e67] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e68]:
              - link "Terms & Conditions" [ref=e69] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e70]:
              - link "Privacy Policy" [ref=e71] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e72]:
          - heading "Follow Us" [level=3] [ref=e73]
          - generic [ref=e74]:
            - link [ref=e75] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e76]
            - link [ref=e78] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e79]
            - link [ref=e82] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e83]
          - generic [ref=e86]:
            - heading "For Support" [level=3] [ref=e87]
            - link "support@qabrains.com" [ref=e88] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e90]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e91]
```

# Test source

```ts
  1  | import { test, expect } from "@fixtures/baseTest";
> 2  | test.afterEach(async ({ headerPage }) => {
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  3  |   await headerPage.logout();
  4  | });
  5  | 
  6  | test("[@regression] Verify empty favorites state and product addition behavior", async ({
  7  |   loggedInPage,
  8  |   homePage,
  9  |   headerPage,
  10 |   favoritesPage,
  11 | }) => {
  12 |   await test.step("Navigate to Favorites and verify empty state", async () => {
  13 |     await headerPage.clickOnFavorite();
  14 |     await expect(loggedInPage).toHaveURL(/favorite/);
  15 |     await expect(favoritesPage.getMessage()).toContainText(
  16 |       "You have no favorite products",
  17 |     );
  18 |   });
  19 | 
  20 |   await test.step("Navigate back to Home page", async () => {
  21 |     await headerPage.clickOnLogo();
  22 |   });
  23 | 
  24 |   await test.step("Mark a product as favorite", async () => {
  25 |     await homePage.markProductAsFavorite("Sample Trouser Name");
  26 |   });
  27 | 
  28 |   await test.step("Verify product appears in Favorites", async () => {
  29 |     await headerPage.clickOnFavorite();
  30 |     await expect(favoritesPage.getProducts()).toHaveCount(1);
  31 |   });
  32 | });
  33 | 
```