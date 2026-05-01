export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "email" });
    this.passwordInput = page.getByLabel("Password", { name: "password" });
    this.loginButton = page.locator("//button[@type='submit' and text()='Login']",
    );
    this.errorMessages = page.locator("div[data-title]");
  }

  async goToApplicationLoginPage() {
    await this.page.goto("/ecommerce/login");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
 async getErrorMessages() {
    await this.page.waitForSelector("div[data-title]", { timeout: 5000 });
  return await this.errorMessages.allTextContents();
}

 
 
  
}
