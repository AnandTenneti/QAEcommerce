import {test,expect} from './fixtures'
import {HeaderPage} from '../pages/HeaderPage'


// test('Login with valid credentials', async ({loginPage,headerPage,page}) => {
//     await loginPage.goToApplicationLoginPage('/ecommerce/login')
//     await loginPage.login('test@qabrains.com','Password123')
//     await expect(page).toHaveURL('/ecommerce');
//     await headerPage.logout();
// });
test('Login with valid credentials', async ({loggedInPage, headerPage}) => {
    await expect(loggedInPage).toHaveURL('/ecommerce');
    await headerPage.logout();
    await expect(loggedInPage).toHaveURL('/ecommerce/login');
});
