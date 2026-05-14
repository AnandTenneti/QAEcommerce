# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> Login with invalid credentials
- Location: tests/LoginPageTest.spec.js:21:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: undefined
Received array: []
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
  1  | import {test,expect} from '../fixtures/fixtures'
  2  | 
  3  | const errorMessages  = {
  4  |     invalidPassword: "Username matched but password is incorrect.",
  5  |     invalidUsername: "Password matched but email is incorrect.",
  6  |     invalidUsernameAndPassword: "Neither email nor password matched."
  7  | }
  8  | // test('Login with valid credentials', async ({loginPage,headerPage,page}) => {
  9  | //     await loginPage.goToApplicationLoginPage('/ecommerce/login')
  10 | //     await loginPage.login('test@qabrains.com','Password123')
  11 | //     await expect(page).toHaveURL('/ecommerce');
  12 | //     await headerPage.logout();
  13 | // });
  14 | test('Login with valid credentials', async ({loggedInPage, headerPage}) => {
  15 |     await expect(loggedInPage).toHaveURL('/ecommerce');
  16 |     await headerPage.logout();
  17 |     await expect(page).toHaveURL('/ecommerce/login');
  18 | });
  19 | 
  20 | 
  21 | test('Login with invalid credentials', async ({loginPage,headerPage,page}) => {
  22 |     await loginPage.goToApplicationLoginPage('/ecommerce/login')
  23 |     await loginPage.login('test@qabrains.com','Password12')
  24 |     const errorMessages = await loginPage.getErrorMessages();
> 25 |     expect(errorMessages).toContain(errorMessages.invalidPassword);
     |                           ^ Error: expect(received).toContain(expected) // indexOf
  26 | });
  27 | 
```