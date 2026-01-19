import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  // readonly closeModalIcon: Locator = this.page.locator(
  //   '//*[@id="blockcart-modal"]//*[@aria-label="Close"]'
  // );

  async closeModal() {
    // await this.page.waitForTimeout(4000)
   
    await this.page.waitForLoadState("networkidle");
    await this.page.keyboard.press("Escape");
  }
}
