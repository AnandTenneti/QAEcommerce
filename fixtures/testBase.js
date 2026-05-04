import { test as base, expect } from '@fixtures/fixtures';

export const test = base;

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const path = `screenshots/${testInfo.title}.png`;

    await page.screenshot({ path, fullPage: true });

    await testInfo.attach('screenshot', {
      path,
      contentType: 'image/png',
    });
  }
});

export const expect = test.expect;
