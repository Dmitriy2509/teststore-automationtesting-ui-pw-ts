import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly closeModalIcon: Locator = this.page.locator(
    '//*[@id="blockcart-modal"]//*[@aria-label="Close"]'
  );

  async clickCloseModalIcon() {
    await this.closeModalIcon.click();
  }
}
