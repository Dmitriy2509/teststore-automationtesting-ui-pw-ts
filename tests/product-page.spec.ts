import { expect } from "@playwright/test";
import { ProductTitleData } from "../data/ProductTitleData";
import { test } from "../fixtures/fixtures";
import { MessagesData } from "../data/MessagesData";

test(
  "TC-0005 Add item to cart",
  { tag: ["@regression", "@itemToCart"] },
  async ({
    logIn,
    mainPage,
    productDetailsPage,
    productDetailsPageConfirmation
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

    await test.step("Verify confirmation message", async () => {
      await productDetailsPage.waitForLoadingPage();
      await productDetailsPageConfirmation.waitForConfirmationMessage();

      const actualMessage = (
        await productDetailsPageConfirmation.message.innerText()
      ).trim();
      expect(actualMessage).toContain(
        MessagesData.productSuccessfullyAddedToYourShoppingCartMessage
      );
    });
  }
);
