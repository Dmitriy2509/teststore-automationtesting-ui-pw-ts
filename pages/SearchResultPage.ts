import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage {
  readonly productsArea: Locator = this.page.locator("#products");
  readonly productTitle: Locator = this.page.locator(".product-title");

  async waitForLoadingSearchResultPage() {
    await this.productsArea.waitFor();
    await this.page.waitForLoadState("load");
  }
}
