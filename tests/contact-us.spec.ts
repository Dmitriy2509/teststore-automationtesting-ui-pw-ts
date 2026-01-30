import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";
import { ContactUsData } from "../data/ContactUs";

test.describe("Contact Us tests", () => {
  test(
    "TC-0009 Verify contact email us is present",
    { tag: ["@regression", "@contactUsEmailUs"] },
    async ({ mainPage, contactUsPage }) => {
      await test.step("Navigate to main page", async () => {
        await mainPage.navigateToMainPage();
      });

      await test.step("Click contact us link", async () => {
        await mainPage.clickContactUsLink();
      });

      await test.step("Verify contact email us is present", async () => {
        const actualEmailUsText =
          await contactUsPage.contactUsEmail.innerText();

        expect(actualEmailUsText).toContain(ContactUsData.expectedEmailUsText);
      });
    }
  );

  test(
    "TC-0010 Verify error message",
    { tag: ["@regression", "@contactUsErrorMessage"] },
    async ({ mainPage, contactUsPage }) => {
      await test.step("Navigate to main page", async () => {
        await mainPage.navigateToMainPage();
      });

      await test.step("Click contact us link", async () => {
        await mainPage.clickContactUsLink();
      });

      await test.step("Click on 'Send' button", async () => {
        await contactUsPage.clickSendBtn();
      });

      await test.step("Verify error message is displayed", async () => {
        const actualErrorMessage = await contactUsPage.errorMessage.innerText();

        expect(actualErrorMessage).toContain(
          ContactUsData.expectedErrorMessage
        );
      });
    }
  );
});
