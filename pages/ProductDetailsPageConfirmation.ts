import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly proceedToCheckoutBtn: Locator = this.page.locator(
    ".cart-content-btn a"
  );

  async clickProceedToCheckoutBtn() {
    const promise = this.page.waitForResponse("**/index.php?controller=cart");
    await this.proceedToCheckoutBtn.click();
    const response = await promise;
    expect(response.status()).toBe(200);
  }
}
