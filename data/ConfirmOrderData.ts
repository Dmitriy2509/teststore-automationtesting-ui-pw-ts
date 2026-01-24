import {faker} from '@faker-js/faker';

export class ConfirmOrderData {

    static readonly state = "Alabama";
    static readonly paymentMethod = "Pay by bank wire";

    static getAddress() {
        return faker.location.streetAddress();
    }

    static getCity() {
        return faker.location.city();
    }

    static getZipPostalCode() {
        return faker.location.zipCode().substring(0, 5);
    }
}