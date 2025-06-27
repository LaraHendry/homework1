import { test, expect } from "../base";

test.describe("Smoke check the CreateFuture website UI", () => {
  test("Open homepage and check logo", async ({ homepage, commonFunctions }) => {
    const page = homepage.page;
    await homepage.goToHomePage();
    //await homepage.viewCookieConsentMessage();
   // await expect(homepage.getCookieConsentMessage()).toBeVisible();
  //  await page.getByRole("button", { name: "Decline" }).click();
  
    await test.step("Check CreateFuture logo", async () => {
      await expect(
        page.getByRole("link", { name: "CreateFuture Logo black text" }),
      ).toBeVisible();
      await expect(homepage.aboutNav).toBeVisible();
    });

    await test.step("Check 'About' tab", async () => {
      await expect(homepage.aboutNav).toBeVisible();
      await homepage.expandTab(homepage.aboutNav, homepage.whoWeAreNav);
      await expect(homepage.whoWeAreNav).toBeVisible();
      await homepage.expandTab(homepage.aboutNav, homepage.missionsAndValuesNav);
      await expect(homepage.missionsAndValuesNav).toBeVisible();
      await homepage.expandTab(homepage.aboutNav, homepage.aiEnablementNav);
      await expect(homepage.aiEnablementNav).toBeVisible();
      
  });

    await test.step("Homepage displays first banner", async () => {
        const page = homepage.page;
    const bannerTimerMs = 1000;
      await expect(homepage.firstBanner).toBeVisible();
      await page.waitForTimeout(bannerTimerMs);
      await expect(homepage.secondBanner).toBeVisible();
    });
  });

  });
