import {test, expect} from "./fixture"

test('Verify login fixture', async ({login}) => {
    console.log('This test is using the login fixture');
    await expect(login).toHaveURL('/ecommerce/login');
    await login.waitForTimeout(2000);
});