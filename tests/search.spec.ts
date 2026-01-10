import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";
import { SearchData } from "../data/SearchData";

test(
  "TC-0002 Search test",
  { tag: ["@regression", "@smoke", "@searchTest"] },
  async ({ mainPage, searchResultPage }) => {
    await test.step("Navigate to main page", async () => {
      await mainPage.navigateToMainPage();
    });

    await test.step("Search for a product", async () => {
      await mainPage.searchProduct(SearchData.searchProductRequest);
    });

    await test.step("Wait for search results to load", async () => {
      await searchResultPage.waitForLoadingSearchResultPage();
    });

    await test.step("Verify that all product titles contain the search term", async () => {
      const listProductTitles =
        await searchResultPage.productTitle.allInnerTexts();

      for (const title of listProductTitles) {
        expect(title.toLowerCase()).toContain(SearchData.searchProductRequest);
      }
    });
  }
);

test(
  "TC-0003 Search test with no results",
  { tag: ["@regression", "@searchTest"] },
  async ({ mainPage, searchResultPage }) => {
    await test.step("Navigate to main page", async () => {
      await mainPage.navigateToMainPage();
    });

    await test.step("Search for a product", async () => {
      await mainPage.searchProduct(SearchData.noMatchesSearchProductRequest);
    });

    await test.step("Wait for search results to load", async () => {
      await searchResultPage.waitForLoadingSearchResultPage();
    });

    const noResultMessage = await searchResultPage.productsArea.innerText();

    test.step("Verify that the no results message is displayed", async () => {
      expect(noResultMessage).toContain(SearchData.noMatchesMessage);
      expect(noResultMessage).toContain(SearchData.tryOtherKeywordsMessage);
    });
  }
);
