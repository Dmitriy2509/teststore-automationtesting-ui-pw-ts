import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly proceedToCheckoutBtn: Locator = this.page.locator(
    ".cart-content-btn .btn-primary"
  );

  async clickProceedToCheckoutBtn() {
    await this.proceedToCheckoutBtn.click();
  }
}
