import { expect } from "@playwright/test";
import { ProductTitleData } from "../data/ProductTitleData";
import { test } from "../fixtures/fixtures";

test(
  "TC-0007 Edit quantity of items in cart",
  { tag: ["@regression", "@editCountItemCart"] },
  async ({
    logIn,
    mainPage,
    productDetailsPage,
    productDetailsPageConfirmation,
    cartPage,
  }) => {
    const increaseProductQuantity = 2;
    const quantityItems = "3 items";
    const price = "$35.70";

    await test.step("Navigate to main page", async () => {
      await mainPage.navigateToMainPage();
    });

    await test.step("Click item", async () => {
      await mainPage.clickItemByTitle(ProductTitleData.mugItem);
    });

    await test.step("Add item to cart", async () => {
      await productDetailsPage.clickAddToCartBtn();
    });
    await test.step("Proceed to checkout", async () => {
      await productDetailsPageConfirmation.clickProceedToCheckoutBtn();
    });

    await test.step("Increase product quantity in cart", async () => {
      await cartPage.increaseProductQuantity(increaseProductQuantity);
    });

    await test.step("Verify updated quantity and price in cart", async () => {
      await expect(cartPage.orderDetails).toContainText(quantityItems);
      await expect(cartPage.orderDetails).toContainText(price);
    });
  }
);
