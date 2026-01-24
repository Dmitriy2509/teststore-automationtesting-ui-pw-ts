import { BasePage } from "./BasePage";

export class ConfirmOrderPage extends BasePage {
    readonly deleteAddressBtn = this.page.locator('[data-link-action="delete-address"]');
    readonly addressInput = this.page.locator('#field-address1');
    readonly cityInput = this.page.locator('#field-city');
    readonly stateDropdown = this.page.locator('#field-id_state');
    readonly zipPostalCodeInput = this.page.locator('#field-postcode');
    readonly submitAddressBtn = this.page.locator('[name="confirm-addresses"]');
    readonly submitDeliveryBtn = this.page.locator('[name="confirmDeliveryOption"]');
    readonly checkboxTermsOfService = this.page.locator('//*[@id="conditions_to_approve[terms-and-conditions]"]');
    readonly placeOrderBtn = this.page.locator('//*[@id="payment-confirmation"]//*[@type="submit" and contains(normalize-space(.), "Place order")]');

    async getPaymentMethod(paymentMethod: string) {
        return this.page.locator(`//*[@class="payment-options "]//*[text()="${paymentMethod}"]`);
    }

    async clickDeleteAddressBtn() {
        const count = await this.deleteAddressBtn.count();
        if(count > 0) {
            await this.deleteAddressBtn.click();
        }
    }

    async fillAddress(address: string) {
        await this.addressInput.waitFor({ state: 'attached' });
        await this.addressInput.click();
        await this.addressInput.fill(address);
    }

    async fillCity(city: string) {
        await this.cityInput.waitFor({ state: 'attached' });
        await this.cityInput.click();
        await this.cityInput.fill(city);
    }

    async selectState(state: string) {
        await this.stateDropdown.waitFor({ state: 'attached' });
        await this.stateDropdown.click();
        await this.stateDropdown.selectOption({label: state});
    }

    async fillZipPostalCode(zipPostalCode: string) {
        await this.zipPostalCodeInput.waitFor({ state: 'attached' });
        await this.zipPostalCodeInput.click();
        await this.zipPostalCodeInput.fill(zipPostalCode);
    }

    async clickSubmitAddressBtn() {
        await this.submitAddressBtn.waitFor({ state: 'visible' });
        await this.submitAddressBtn.click();
    }

    async clickSubmitDeliveryBtn() {
        await this.submitDeliveryBtn.waitFor({state: 'visible'});
        await this.submitDeliveryBtn.click();
    }

    async choosePaymentMethod(paymentMethod: string) {
        await (await this.getPaymentMethod(paymentMethod)).waitFor({state: 'visible'});
        await (await this.getPaymentMethod(paymentMethod)).click();
    }

    async checkCheckboxTermsOfService() {
        await this.checkboxTermsOfService.waitFor({state: 'attached'});
        await this.checkboxTermsOfService.check();
    }
}