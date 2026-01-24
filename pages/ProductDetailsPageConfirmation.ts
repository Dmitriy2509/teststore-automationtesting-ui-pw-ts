import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {

  async closeModal() {   
    await this.page.waitForLoadState("networkidle");
    await this.page.keyboard.press("Escape");
  }
}
