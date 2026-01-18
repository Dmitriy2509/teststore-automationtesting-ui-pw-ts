import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly modal: Locator = this.page.locator("#blockcart-modal");
  readonly closeModalIcon: Locator = this.modal.locator('[aria-label="Close"]');

  async clickCloseModalIcon() {
    await this.modal.waitFor({ state: 'visible' });
    await this.closeModalIcon.waitFor({ state: 'visible' });
    await this.closeModalIcon.click();
  }
}
