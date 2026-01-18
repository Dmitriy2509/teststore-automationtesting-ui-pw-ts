import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
  readonly proceedToCheckoutBtn: Locator = this.page.locator(
    ".cart-content-btn .btn-primary"
  );

  async clickProceedToCheckoutBtn() {
    const promise = this.page.waitForResponse("**/index.php?fc=module&module=ps_shoppingcart&controller=ajax");
    const response = await promise;
    expect(response.status()).toBe(200);
    await this.proceedToCheckoutBtn.click();
  }
}
