import { test, expect } from "../base";

test.describe("Smoke check the CreateFuture website homepage", () => {
 
  test.beforeEach(async ({homepage}) => {
    const page = homepage.page;
    await homepage.goToHomePage();
  });
 
  test("Check CreateFuture logo", async ({ homepage }) => {
    const page = homepage.page;

      await expect(
        page.getByRole("link", { name: "CreateFuture Logo black text" }),
      ).toBeVisible();
      await expect(homepage.aboutNav).toBeVisible();
    });

  test("Check 'About' tab", async ({ homepage }) => {
    const page = homepage.page;
      await expect(homepage.aboutNav).toBeVisible();
      await homepage.expandTab(homepage.aboutNav, homepage.whoWeAreNav);
      await expect(homepage.whoWeAreNav).toBeVisible();
      await expect(homepage.missionsAndValuesNav).toBeVisible();
      await expect(homepage.aiEnablementNav).toBeVisible();
      
  }); 

  test("Check dynamic horizontal banners", async ({ homepage }) => {
    const page = homepage.page;
    const bannerTimerMs = 1000;
      await expect(homepage.firstBanner).toBeVisible();
      await page.waitForTimeout(bannerTimerMs);
      await expect(homepage.secondBanner).toBeVisible();
  });
});
  
