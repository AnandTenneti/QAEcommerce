## QA Ecommerce Application
![CI](https://img.shields.io/github/actions/workflow/status/AnandTenneti/QAEcommerce/playwright.yml?label=Tests)
![Playwright](https://img.shields.io/badge/Tested%20With-Playwright-45ba4b?logo=playwright)
![Browsers](https://img.shields.io/badge/Browsers-Chromium%20%7C%20Firefox%20%7C%20WebKit-blue)
![Tests](https://img.shields.io/badge/Tests-SMOKE%20%7C%20REGRESSION-orange)
![Lint](https://img.shields.io/badge/code%20style-eslint-purple)






A QAEcommerce application is a testable online shopping system designed to simulate real-world e-commerce workflows such as:

User registration & login
Product search & filtering
Add to cart & checkout
Payment flow (mock or real)
Order history

👉 The goal is not business usage, but testing practice.

## Project Overview
```

├── constants
│   └── OrderByOptions.js
├── fixtures
│   └── fixtures.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── pages
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── FavoritesPage.js
│   ├── HeaderPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   └── ProductDetailsPage.js
├── playwright-report
│   └── index.html
├── playwright.config.js
├── README.md
├── test-results
├── testdata
│   ├── products.json
│   ├── testData_1.json
│   ├── testData.json
│   └── users.json
├── tests
│   ├── datadriven
│   ├── e2e
│   ├── FavoritestTest.spec.js
│   ├── HomePageTest.spec.js
│   ├── LoginTest.spec.js
│   ├── ProductDetailsTest.spec.js
└── utils
    ├── Common.js

```



✨ Key Features

✅ Page Object Model (POM)
✅ Custom Playwright Fixtures
✅ Data-driven testing using JSON
✅ Tag-based test execution (@smoke, @end2end)
✅ Cross-browser testing support
✅ Structured and maintainable codebase

## Tech Stack

 * Playwright
 * Javascript
 * Node.js
 * Page Object Model



Functional Flows to Test E-Commerce

 

Add to Cart & Remove Items

Verify items can be added to cart.

Verify quantity updates correctly.

Verify items can be removed.


Favorites / Wishlist Functionality

Verify products can be added/removed from favorites.

Ensure favorites persist after page reload/login.


Sorting & Filtering Products

Verify sorting by price (Low → High, High → Low).

Verify sorting by newest arrivals.

Verify filters (category, price range, brand).


Checkout Flow

Verify user can proceed to checkout.

Validate shipping & billing information input.

Verify order summary before payment.

Validate order confirmation after purchase.


🧪 Test Coverage
🔐 Authentication
Valid login
Invalid username/password combinations
Error message validations
🛍️ Product Flow
Product selection
Product details validation
🛒 Checkout Flow
Add to cart
Checkout process
Order confirmation validation

## 🚀 Running Tests

### ▶️  Run all tests

```
    npx playwright test
```

### 📄 Run a specific test file
```
    npx playwright test tests/Logintest.spec.js
```
### 👀 Run tests in headed mode (visible browser)
```
    npx playwright test --headed
```
### 🏷️ Run tests by tag (e.g., smoke)
```
    npx playwright test --grep @smoke --project=chromium --headed
```
 ### 📊 View HTML test report
 ```
    npx playwright show-report
```


## 👨‍💻 Author
**Anand Kiran Tenneti**  
🚀 Playwright | Automation Testing


## 🎯 Result
- ✔ Complete automation framework  
- ✔ Covers all key scenarios  
- ✔ Ready for real-world QA testing  


