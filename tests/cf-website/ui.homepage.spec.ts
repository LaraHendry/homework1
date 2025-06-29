import { test, expect } from "../base";

test.describe("Smoke check the CreateFuture website homepage", () => {
 
  test.beforeEach(async ({homepage}) => {
    const page = homepage.page;
    await homepage.goToHomePage();
    await expect(page.getByRole('button', { name: 'Decline' })).toBeVisible();
    await page.getByRole('button', { name: 'Decline' }).click();
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

  test("Check dynamic horizontal Slides", async ({ homepage, commonFunctions }) => {
    const page = homepage.page;
    const SlideTimerMs = 1000;
    const slides = [homepage.firstSlide, homepage.secondSlide, homepage.thirdSlide, homepage.fourthSlide];

    await commonFunctions.waitForNewBannerSlide(slides, SlideTimerMs);

  });
});
  
