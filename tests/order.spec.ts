import { ProductTitleData } from "../data/ProductTitleData";
import { test } from "../fixtures/fixtures";

test(
  "TC-0008 order",
  { tag: ["@regression", "@order"] },
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

    // await cartPage.clickProceedToCheckoutBtn();

    // await confirmOrderPage.clickDeleteAddressBtn();
  }
);
