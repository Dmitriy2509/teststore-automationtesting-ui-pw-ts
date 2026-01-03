import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test(
  "TC-0001 Log in test",
  { tag: ["@regression", "@smoke", "@logIn"] },
  async ({ mainPage, loginPage }) => {
    await test.step("Navigate to main page", async () => {
      await mainPage.navigateToMainPage();
    });

    await test.step("Click Sign In button", async () => {
      await mainPage.clickSignInBtn();
    });

    await test.step("Fill in email field", async () => {
      await loginPage.fillEmail(process.env.EMAIL!);
    });

    await test.step("Fill in password field", async () => {
      await loginPage.fillPassword(process.env.PASSWORD!);
    });

    await test.step("Click Sign In button to submit login form", async () => {
      await loginPage.clickSignInBtn();
    });

    await test.step("Verify Sign Out button is visible", async () => {
      await expect(mainPage.signOutBtn).toBeVisible();
    });
  }
);
