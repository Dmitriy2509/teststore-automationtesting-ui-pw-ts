import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage"

type Fixtures = {
    mainPage: MainPage;
    loginPage: LoginPage;
}

export const test = base.extend<Fixtures>({
    mainPage: async ({page}, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },

    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});