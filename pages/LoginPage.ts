import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly emailFieldInput: Locator = this.page.locator("#field-email");
    readonly passwordFieldInput: Locator = this.page.locator("#field-password");
    readonly signInBtn: Locator = this.page.locator("#submit-login");

    async fillEmail(email: string) {
            await this.emailFieldInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordFieldInput.fill(password);
    }

    async clickSignInBtn() {
        await this.signInBtn.click();
    }
}