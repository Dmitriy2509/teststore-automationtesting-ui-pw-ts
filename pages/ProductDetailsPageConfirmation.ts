import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly proceedToCheckoutBtn: Locator = this.page.locator(
    '//*[@id="blockcart-modal"]//*[@aria-label="Close"]'
  );

  async clickProceedToCheckoutBtn() {
    await this.proceedToCheckoutBtn.click();
    await this.page.locator("#_desktop_cart").click();
  }
}
