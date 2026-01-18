import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly confirmationForm: Locator = this.page.locator("#blockcart-modal");
  readonly proceedToCheckoutBtn: Locator = this.page.locator(
    ".cart-content-btn .btn-primary"
  );

  async clickProceedToCheckoutBtn() {
    await this.confirmationForm.waitFor({ state: "visible" });
    await this.proceedToCheckoutBtn.click();
  }
}
