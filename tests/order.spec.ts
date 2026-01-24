import { expect } from "@playwright/test";
import { ConfirmOrderData } from "../data/ConfirmOrderData";
import { ProductTitleData } from "../data/ProductTitleData";
import { test } from "../fixtures/fixtures";

test(
  "TC-0008 confirm order",
  { tag: ["@regression", "@confirmOrder"] },
  async ({
    logIn,
    mainPage,
    productDetailsPage,
    productDetailsPageConfirmation,
    cartPage,
    confirmOrderPage
  }) => {
    await test.step("Navigate to main page", async () => {
      await mainPage.navigateToMainPage();
    });

    await test.step("Click item", async () => {
      await mainPage.clickItemByTitle(ProductTitleData.mugItem);
    });

    await test.step("Add item to cart", async () => {
      await productDetailsPage.clickAddToCartBtn();
    });

    await test.step("Click close modal icon", async () => {
      await productDetailsPageConfirmation.closeModal();
    });

    await test.step("Click cart icon to navigate to cart page", async () => {
      await mainPage.clickCartIcon();
    });

    await test.step("Click proceed to checkout button", async () => {
      await cartPage.clickProceedToCheckoutBtn();
    });

    await test.step("Click delete address button", async () => {
      await confirmOrderPage.clickDeleteAddressBtn();
    });

    await test.step("Fill in address details", async () => {
      await confirmOrderPage.fillAddress(ConfirmOrderData.getAddress());
    });

    await test.step("Fill in city details", async () => {
      await confirmOrderPage.fillCity(ConfirmOrderData.getCity());
    });

    await test.step("Select state from dropdown", async () => {
      await confirmOrderPage.selectState(ConfirmOrderData.state);
    });

    await test.step("Fill in zip/postal code details", async () => {
      await confirmOrderPage.fillZipPostalCode(
        ConfirmOrderData.getZipPostalCode()
      );
    });

    await test.step("Click submit address button", async () => {
      await confirmOrderPage.clickSubmitAddressBtn();
    });

    await test.step("Click submit delivery button", async () => {
      await confirmOrderPage.clickSubmitDeliveryBtn();
    });

    await test.step("Choose payment method", async () => {
      await confirmOrderPage.choosePaymentMethod(
        ConfirmOrderData.paymentMethod
      );
    });

    await test.step("Check terms of service checkbox", async () => {
      await confirmOrderPage.checkCheckboxTermsOfService();
    });

    await test.step("Verify place order button is enabled", async () => {
      await expect(confirmOrderPage.placeOrderBtn).toBeEnabled();
      await expect(confirmOrderPage.placeOrderBtn).not.toHaveAttribute(
        "disabled"
      );
    });
  }
);
