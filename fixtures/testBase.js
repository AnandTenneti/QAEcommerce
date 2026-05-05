import { test as base, expect } from '@fixtures/baseTest';

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
 try {
    await headerPage.logout();
  } catch (e) {
    console.warn('Logout skipped:', e.message);
  }
});

export { expect };
