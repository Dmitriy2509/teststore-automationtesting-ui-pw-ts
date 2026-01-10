import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { FilterByPage } from "../pages/FilterByPage";
import { ClothesPage } from "../pages/ClothesPage";

type Fixtures = {
  mainPage: MainPage;
  loginPage: LoginPage;
  searchResultPage: SearchResultPage;
  filterByPage: FilterByPage;
  clothesPage: ClothesPage;
};

export const test = base.extend<Fixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  searchResultPage: async ({ page }, use) => {
    const searchResultPage = new SearchResultPage(page);
    await use(searchResultPage);
  },

  filterByPage: async ({page}, use) =>{
    const filterByPage = new FilterByPage(page);
    await use(filterByPage);
  },

  clothesPage: async ({page}, use) =>{
    const clothesPage = new ClothesPage(page);
    await use(clothesPage);
  }
});
