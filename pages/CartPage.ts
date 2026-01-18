import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly increaseQuantityBtn = this.page.locator(
    ".input-group-btn-vertical .bootstrap-touchspin-up"
  );
  readonly orderDetails = this.page.locator(".cart-detailed-subtotals");

  async increaseProductQuantity(increaseProductQuantity: number) {
    for (let i = 0; i < increaseProductQuantity; i++) {
      await this.increaseQuantityBtn.click();
    }
  }
}
