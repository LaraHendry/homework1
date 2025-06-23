import { test, expect } from "../base";

test.describe("Smoke check the CreateFuture website UI", () => {
  test.beforeEach(async ({ homepage }) => {
    const page = homepage.page;
    await homepage.goToHomePage();
    //await expect(homepage.getCookieConsentMessage()).toBeVisible();
    await page.getByRole("button", { name: "Decline" }).click();
  });

  test("Open homepage and decline cookies", async ({ homepage }) => {
    const page = homepage.page;

    await test.step("Check CreateFuture logo", async () => {
      await expect(
        page.getByRole("link", { name: "CreateFuture Logo black text" }),
      ).toBeVisible();
      await expect(homepage.aboutNav).toBeVisible();
    });
  });

  test("Open homepage and check upper UI", async ({ homepage, commonFunctions }) => {
    const page = homepage.page;

    await test.step("Check CreateFuture logo", async () => {
      await expect(
        page.getByRole("link", { name: "CreateFuture Logo black text" }),
      ).toBeVisible();
      await expect(homepage.aboutNav).toBeVisible();
    });

    await test.step("Check About tab", async () => {
      await expect(homepage.aboutNav).toBeVisible();
      await homepage.expandAbout();
      await expect(homepage.whoWeAreNav).toBeVisible();
      await homepage.expandAbout();
      await expect(homepage.missionsAndValuesNav).toBeVisible();
      await homepage.expandAbout();
      await expect(homepage.aiEnablementNav).toBeVisible();

    });
  });

  test("Open homepage and check horizontal scroll banner", async ({
    homepage,
  }) => {
    const page = homepage.page;
    const bannerTimerMs = 1000;

    await test.step("Homepage displays first banner", async () => {
      await expect(homepage.firstBanner).toBeVisible();
      await page.waitForTimeout(bannerTimerMs);
      await expect(homepage.secondBanner).toBeVisible();
    });
  });
});
