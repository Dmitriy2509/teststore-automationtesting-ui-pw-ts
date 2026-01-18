import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly proceedToCheckoutBtn: Locator = this.page.locator(
    ".cart-content-btn .btn-secondary"
  );

  async clickProceedToCheckoutBtn() {
    await this.proceedToCheckoutBtn.click({force: true});
    await this.page.locator("#_desktop_cart").click();
  }
}
