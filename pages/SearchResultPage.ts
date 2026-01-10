import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage {
  readonly productsArea: Locator = this.page.locator("#products");
  readonly productTitle: Locator = this.page.locator(".product-title");
  readonly toastMessage: Locator = this.page.locator(".wishlist-toast-text");

  async getWishListButtonByProductName(productName: string) {
    return this.page.locator(`//*[contains(@class,"thumbnail-container")]//*[contains(text(), "${productName}")]//ancestor::div[@class="product-description"]//following-sibling::button[@class="wishlist-button-add"]`);
  }

  async getWishListName(wishListName: string) {
    return this.page.locator(`//*[@class="wishlist-chooselist"]//*[normalize-space(text()) = "${wishListName}"]`);
  }

  async getWishIconStatus(productName: string) {
    return this.page.locator(`//*[contains(@class,"thumbnail-container")]//*[contains(text(), "${productName}")]//ancestor::div[@class="product-description"]//following-sibling::button[@class="wishlist-button-add"]//*[@class="material-icons"]`);
  }

  async waitForLoadingSearchResultPage() {
    await this.productsArea.waitFor();
    await this.page.waitForLoadState("load");
  }

  async clickAddToWishListByProductName(productName: string) {
    await this.waitForLoadingSearchResultPage();
    await (await this.getWishListButtonByProductName(productName)).click();
  }

  async clickWishListName(wishListName: string) {
    await (await this.getWishListName(wishListName)).click();
  }

}
