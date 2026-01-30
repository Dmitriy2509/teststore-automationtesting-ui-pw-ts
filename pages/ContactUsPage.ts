import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactUsPage extends BasePage {
  readonly contactUsEmail: Locator = this.page.locator(".contact-rich a");
  readonly sendBtn: Locator = this.page.locator(".form-footer .btn-primary");
  readonly errorMessage: Locator = this.page.locator(".alert-danger");

  async clickSendBtn() {
    await this.sendBtn.click();
  }
}
