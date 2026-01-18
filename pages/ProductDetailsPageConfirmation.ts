import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPageConfirmation extends BasePage {
    readonly message: Locator = this.page.locator("#myModalLabel");

    async waitForConfirmationMessage() {
        await this.message.waitFor();
    }
}