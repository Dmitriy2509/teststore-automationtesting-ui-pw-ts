import { expect } from "@playwright/test";
import { ProductTitleData } from "../data/ProductTitleData";
import { test } from "../fixtures/fixtures";

test.describe("Edit quantity of items in cart test", () => {
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

      await test.step("Click close modal icon", async () => {
        await productDetailsPageConfirmation.closeModal();
      });

      await test.step("Click cart icon to navigate to cart page", async () => {
        await mainPage.clickCartIcon();
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
});
