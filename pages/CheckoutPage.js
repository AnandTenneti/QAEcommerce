export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator(
      "//label[text()='First Name']/following-sibling::input",
    );
    this.lastName = page.locator(
      "//label[text()='Last Name']/following-sibling::input",
    );
    this.zipcode = page.locator(
      "//label[text()='Zip Code']/following-sibling::input",
    );
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.productName = page.locator(
      "//div[contains(@class,'cart-list')]/descendant::h3",
    );
    this.productQuantity = page.locator(
      "//p[text()='Quantity']/following-sibling::div/span",
    );
    this.finishButton = page.getByRole("button", { name: "Finish" });
    this.thankYouMessage = page.getByRole("heading", {
      name: "Thank you for your order!",
    });
  }

  async fillCheckOutDetails(firstName, lastName, zipcode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipcode.fill(zipcode);
    await this.continueButton.click();
  }

  reviewProductName() {
    return this.productName;
  }

  reviewProductQuantity() {
    return this.productQuantity;
  }

  async clickOnFinishButton() {
    await this.finishButton.click();
  }

  checkoutComplete() {
    return this.thankYouMessage;
  }
}
