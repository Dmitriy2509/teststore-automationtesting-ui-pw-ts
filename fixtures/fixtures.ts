import { APIResponse, test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { FilterByPage } from "../pages/FilterByPage";
import { ClothesPage } from "../pages/ClothesPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { ProductDetailsPageConfirmation } from "../pages/ProductDetailsPageConfirmation";
import { CartPage } from "../pages/CartPage";

type Fixtures = {
  mainPage: MainPage;
  loginPage: LoginPage;
  searchResultPage: SearchResultPage;
  filterByPage: FilterByPage;
  clothesPage: ClothesPage;
  logIn: MainPage;
  removeItemFromWishlist: APIResponse;
  productDetailsPage: ProductDetailsPage;
  productDetailsPageConfirmation: ProductDetailsPageConfirmation;
  cartPage: CartPage;
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

  filterByPage: async ({ page }, use) => {
    const filterByPage = new FilterByPage(page);
    await use(filterByPage);
  },

  clothesPage: async ({ page }, use) => {
    const clothesPage = new ClothesPage(page);
    await use(clothesPage);
  },

  logIn: async ({ page, request }, use) => {
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);

    await mainPage.navigateToMainPage();
    await mainPage.clickSignInBtn();
    await loginPage.fillEmail(process.env.EMAIL!);
    await loginPage.fillPassword(process.env.PASSWORD!);
    await loginPage.clickSignInBtn();

    await use(mainPage);
  },

  removeItemFromWishlist: async ({ request }, use) => {
    const loginResponse = await request.post(
      "https://teststore.automationtesting.co.uk/index.php?controller=authentication",
      {
        form: {
          email: process.env.EMAIL!,
          password: process.env.PASSWORD!,
          submitLogin: "1",
        },
      }
    );

    expect(loginResponse.status()).toBe(200);

    const deleteResponse = await request.post(
      "https://teststore.automationtesting.co.uk/index.php?action=deleteProductFromWishlist&fc=module&module=blockwishlist&controller=action",
      {
        params: {
          "params[id_product]": 19,
          "params[idWishList]": 8631,
          "params[id_product_attribute]": 0,
        },
      }
    );

    expect(deleteResponse.status()).toBe(200);

    await use(deleteResponse);
  },

  productDetailsPage: async ({ page }, use) => {
    const productDetailsPage = new ProductDetailsPage(page);
    await use(productDetailsPage);
  },

  productDetailsPageConfirmation: async ({ page }, use) => {
    const productDetailsPageConfirmation = new ProductDetailsPageConfirmation(
      page
    );
    await use(productDetailsPageConfirmation);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});
