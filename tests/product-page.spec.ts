import { expect } from "@playwright/test";
import { ProductTitleData } from "../data/ProductTitleData";
import { test } from "../fixtures/fixtures";

test(
  "TC-0006 Add item to cart verify request is 200",
  { tag: ["@regression", "@itemToCart"] },
  async ({ logIn, mainPage, productDetailsPage, page }) => {
    await test.step("Navigate to main page", async () => {
      await mainPage.navigateToMainPage();
    });

    await test.step("Click item", async () => {
      await mainPage.clickItemByTitle(ProductTitleData.mugItem);
    });

    const promise = page.waitForResponse("**/index.php?controller=cart");
    await test.step("Add item to cart", async () => {
      await productDetailsPage.clickAddToCartBtn();
    });

    await test.step("Verify that the add to cart request is successful (200)", async () => {
      const response = await promise;
      expect(response.status()).toBe(200);
    });
  }
);
