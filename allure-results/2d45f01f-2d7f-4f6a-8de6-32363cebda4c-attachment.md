# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: favorites/FavoritesTest.spec.js >> [@regression] Verify empty favorites state and product addition behavior
- Location: tests/favorites/FavoritesTest.spec.js:6:5

# Error details

```
TypeError: (0 , _testHooks.expect) is not a function
```

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
          - combobox [disabled]:
            - text: Select...
            - img
      - generic [ref=e26]:
        - heading "You have no favorite products" [level=2] [ref=e27]:
          - img [ref=e28]
          - text: You have no favorite products
        - link "Continue Shopping" [ref=e30] [cursor=pointer]:
          - /url: /ecommerce
          - img [ref=e31]
          - text: Continue Shopping
    - contentinfo [ref=e33]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link "logo" [ref=e37] [cursor=pointer]:
            - /url: https://qabrains.com
            - img "logo" [ref=e38]
          - paragraph [ref=e39]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e40]:
          - heading "QA Topics" [level=3] [ref=e41]
          - list [ref=e42]:
            - listitem [ref=e43]:
              - link "Web Testing" [ref=e44] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e45]:
              - link "Interview Questions" [ref=e46] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e47]:
              - link "Testing Framework" [ref=e48] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e49]:
              - link "See more" [ref=e50] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e52]
        - generic [ref=e54]:
          - heading "Quick Links" [level=3] [ref=e55]
          - list [ref=e56]:
            - listitem [ref=e57]:
              - link "Discussion" [ref=e58] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e59]:
              - link "About Us" [ref=e60] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e61]:
              - link "Terms & Conditions" [ref=e62] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e63]:
              - link "Privacy Policy" [ref=e64] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e65]:
          - heading "Follow Us" [level=3] [ref=e66]
          - generic [ref=e67]:
            - link [ref=e68] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e69]
            - link [ref=e71] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e72]
            - link [ref=e75] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e76]
          - generic [ref=e79]:
            - heading "For Support" [level=3] [ref=e80]
            - link "support@qabrains.com" [ref=e81] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e83]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e84]
```

# Test source

```ts
  1  | import { test, expect } from "@hooks/testHooks";
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
  14 |     await expect(loggedInPage).toHaveURL(/\/favorites$/);
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
  26 |     const favButton = homePage.getStyledFavoriteButton("Sample Trouser Name");
  27 |     await expect(favButton).toHaveCSS("color", "rgb(255, 0, 0)");
  28 |   });
  29 | 
  30 |   await test.step("Verify product appears in Favorites", async () => {
  31 |     await headerPage.clickOnFavorite();
  32 |     await expect(favoritesPage.getProducts()).toHaveCount(1);
  33 |   });
  34 | });
  35 | 
```