import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPage extends BasePage {
    readonly addToCartBtn: Locator = this.page.locator("//*[@data-button-action='add-to-cart']");

    async clickAddToCartBtn() {
        await this.addToCartBtn.click();
    }
}