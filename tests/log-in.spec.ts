import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures"

test('TC-0001 Log in test', {tag: ["@regression", "@smoke", "@logIn"]}, async ({ mainPage, loginPage}) => {
  await mainPage.navigateToMainPage();
  await mainPage.clickSignInBtn();

  await loginPage.fillEmail(process.env.EMAIL!);
  await loginPage.fillPassword(process.env.PASSWORD!);
  await loginPage.clickSignInBtn();

  await expect(mainPage.signOutBtn).toBeVisible();
});
