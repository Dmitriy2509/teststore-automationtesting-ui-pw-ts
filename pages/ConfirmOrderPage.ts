import { BasePage } from "./BasePage";

export class ConfirmOrderPage extends BasePage {
    readonly deleteAddressBtn = this.page.locator('[data-link-action="delete-address"]');

    async clickDeleteAddressBtn() {
        const count = await this.deleteAddressBtn.count();
        if(count > 0) {
            await this.deleteAddressBtn.click();
        }
    }
}