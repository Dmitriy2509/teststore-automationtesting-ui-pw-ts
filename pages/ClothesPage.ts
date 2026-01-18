import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ClothesPage extends BasePage {
    readonly productTitle: Locator = this.page.locator(".product-title");
}