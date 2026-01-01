import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
    readonly signInBtn: Locator = this.page.locator(".user-info a");
    readonly signOutBtn: Locator = this.page.locator(".logout");

    async navigateToMainPage() {
        await this.page.goto("");
    }

    async clickSignInBtn () {
        await this.signInBtn.click();
    }
}