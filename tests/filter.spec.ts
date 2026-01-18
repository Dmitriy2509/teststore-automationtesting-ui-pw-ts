import { expect } from "@playwright/test";
import { FilterByData } from "../data/FilterByData";
import { test } from "../fixtures/fixtures";
import { MenuLinkData } from "../data/MenuLinkData";
import { ProductTitleData } from "../data/ProductTitleData";

test(
  "TC-0004 Filter test",
  { tag: ["@regression", "@filterTest"] },
  async ({ mainPage, filterByPage, clothesPage }) => {
    await test.step("Navigate to main page", async () => {
      await mainPage.navigateToMainPage();
    });

    await test.step("Navigate to Clothes page", async () => {
      await mainPage.clickMenuLink(MenuLinkData.clothesMenuLink);
    });

    await test.step("Wait for Clothes page to load", async () => {
      await clothesPage.waitForLoadingPage();
    });
    await filterByPage.clickCategoryFilter(FilterByData.menCategory);

    await test.step("Wait for Clothes page to load", async () => {
      await clothesPage.waitForLoadingPage();
    });

    await test.step("Verify that filtered product titles contain the expected item", async () => {
      const listProductTitles = await clothesPage.productTitle.allInnerTexts();

      expect(listProductTitles).toContain(
        ProductTitleData.menHummingbirdPrintedTShirt
      );
    });
  }
);
