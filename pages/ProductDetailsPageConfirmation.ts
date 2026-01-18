import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly confirmationForm: Locator = this.page.locator("#blockcart-modal");
  readonly proceedToCheckoutBtn: Locator = this.page.locator(
    ".cart-content-btn a"
  );

  async clickProceedToCheckoutBtn() {
    await this.confirmationForm.waitFor();
    await this.proceedToCheckoutBtn.click();
  }
}
