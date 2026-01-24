import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly increaseQuantityBtn = this.page.locator(
    ".input-group-btn-vertical .bootstrap-touchspin-up"
  );
  readonly orderDetails = this.page.locator(".cart-detailed-subtotals");
  readonly proceedToCheckoutBtn = this.page.locator(".cart-detailed-actions .btn-primary");

  async increaseProductQuantity(increaseProductQuantity: number) {
    await this.page.waitForLoadState("networkidle");
    await this.waitForLoadingPage();
    for (let i = 0; i < increaseProductQuantity; i++) {
      await this.increaseQuantityBtn.click();
    }
  }

  async clickProceedToCheckoutBtn() {
    await this.waitForLoadingPage();
    await this.proceedToCheckoutBtn.click();
  }
}
