import {test as base, expect} from '@playwright/test';

const test = base.extend({
  login: async ({ page }, use) => {
    await page.goto('/ecommerce/login');
    use(page);
  },
});

export { test, expect };