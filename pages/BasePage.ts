import { Page } from "@playwright/test";

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoadingPage() {
    await this.page.waitForLoadState("load");
    await this.page.waitForLoadState("domcontentloaded");
  }
}
