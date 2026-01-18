import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  readonly signInBtn: Locator = this.page.locator(".user-info a");
  readonly signOutBtn: Locator = this.page.locator(".logout");
  readonly searchFieldInput: Locator = this.page.locator(
    ".ui-autocomplete-input"
  );
  readonly cartIcon: Locator = this.page.locator("#_desktop_cart");

  async getMenuLink(menuName: string) {
    return this.page.locator(
      `//a[contains(normalize-space(.), '${menuName}')]`
    );
  }

  async getItemByTitle(itemName: string) {
    return this.page.locator(
      `//*[contains(@class, "featured-products")]//*[text()='${itemName}']`
    );
  }

  async navigateToMainPage() {
    await this.page.goto("");
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
  }

  async searchProduct(productName: string) {
    await this.searchFieldInput.waitFor();
    await this.searchFieldInput.fill(productName);
    await this.searchFieldInput.press("Enter");
  }

  async clickMenuLink(menuName: string) {
    await (await this.getMenuLink(menuName)).click();
  }

  async clickItemByTitle(itemName: string) {
    await (await this.getItemByTitle(itemName)).click();
  }

  async clickCartIcon() {
    await this.cartIcon.click();
  }
}
