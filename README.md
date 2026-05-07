## QA Ecommerce Application

![CI](https://img.shields.io/github/actions/workflow/status/AnandTenneti/QAEcommerce/playwright.yml?label=Tests)
![Playwright](https://img.shields.io/badge/Tested%20With-Playwright-45ba4b?logo=playwright)
![Browsers](https://img.shields.io/badge/Browsers-Chromium%20%7C%20Firefox%20%7C%20WebKit-blue)

<!-- ![Tests](https://img.shields.io/badge/Tests-SMOKE%20%7C%20REGRESSION-orange) 

![Lint](https://img.shields.io/badge/code%20style-eslint-purple)-->

A QAEcommerce application is a testable online shopping system designed to simulate real-world e-commerce workflows such as:

User registration & login
Product search & filtering
Add to cart & checkout
Payment flow (mock or real)
Order history

👉 The goal is not business usage, but testing practice.

## Project Overview

```
.
├── constants
│   ├── errorMessages.js
│   └── OrderByOptions.js
├── fixtures
│   ├── auth.fixtures.js
│   ├── baseTest.js
│   ├── hooks.js
│   ├── page.fixture.js
│   └── testBase.js
├── hooks
│   └── testHooks.js
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
├── playwright.config.js
├── README.md
├── screenshots
├── testdata
│   ├── products.json
│   ├── testData_1.json
│   ├── testData.json
│   └── users.json
├── tests
│   ├── auth.setup.js
│   ├── cart
│   │   └── CartTest.spec.js
│   ├── datadriven
│   │   ├── DataDrivenTests.spec.js
│   │   ├── DataDrivenTests3.spec.js
│   │   ├── login-data-driven.spec.js
│   │   └── ProductPurchaseFlowTest.spec copy.js
│   ├── e2e
│   │   └── ProductPurchaseFlowTest.spec.js
│   ├── favorites
│   │   └── FavoritesTest.spec.js
│   ├── home
│   │   └── HomePageTest.spec.js
│   ├── login
│   │   └── LoginTest.spec.js
│   ├── products
│   │   └── ProductDetailsTest.spec.js
└── utils
    ├── Common.js
    └── Utilities.js

```

✨ Key Features

✅ Page Object Model (POM)

✅ Custom Playwright Fixtures

✅ Data-driven testing using JSON

✅ Tag-based test execution (@smoke, @e2e)

✅ Cross-browser testing support

✅ Structured and maintainable codebase

## Tech Stack

- Playwright
- Javascript
- Node.js
- Page Object Model

Functional Flows to Test E-Commerce

### 🔐 Login Tests

**Positive Scenarios**

- Verify successful login with valid credentials

**Negative Scenarios**

- Verify login fails with invalid username and valid password
- Verify login fails with valid username and invalid password
- Verify login fails with invalid username and invalid password

### Home Tests

 - Verify display of products
 - Verify sorting of products
 - Verify Add to favorites
 - Verify Add to cart 

<!-->

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
-->

## 🚀 Running Tests

### ▶️ Run all tests

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
