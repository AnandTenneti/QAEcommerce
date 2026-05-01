export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'email' });
        this.passwordInput = page.getByLabel('Password', { name: 'password' });
        this.loginButton = page.locator("//button[@type='submit' and text()='Login']");
    }

    async goToApplicationLoginPage() {
        await this.page.goto('/ecommerce/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await Promise.all([
            this.page.waitForURL('/ecommerce'),
            this.loginButton.click(),
        ]);
    }
}