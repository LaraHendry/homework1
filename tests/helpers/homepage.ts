import { Locator, Page, expect } from "@playwright/test";

/**
 * Helper functions to navigate around the website
 */

export class HomePage {
  readonly page: Page;
  readonly aboutNav: Locator;
  readonly ourServicesNav: Locator;
  readonly industriesNav: Locator;
  readonly ourExperienceNav: Locator;
  readonly insightsNav: Locator;
  readonly careersNav: Locator;
  readonly contactNav: Locator;

  readonly whoWeAreNav: Locator;
  readonly missionsAndValuesNav: Locator;
  readonly aiEnablementNav: Locator;

  readonly swiperWrapper: Locator; // slide wrapper
  readonly swiperSlides: Locator; // all individual slides
  readonly goToFirstSlideButton: Locator; 
  readonly goToSecondSlideButton: Locator; 
  readonly goToThirdSlideButton: Locator;
  readonly goToFourthSlideButton: Locator;

  readonly firstSlide: Locator;
  readonly secondSlide: Locator;
  readonly thirdSlide: Locator;
  readonly fourthSlide: Locator;

  readonly firstSlideLMButton: Locator; // learn more button
  readonly secondSlideDLButton: Locator; // download button
  readonly thirdSlideLMButton: Locator; // learn more button
  readonly fourthSlideLMButton: Locator; // learn more button

  readonly cookieMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    // Upper nav page names
    this.aboutNav = page.getByRole("menuitem", { name: "About" });
    this.ourServicesNav = page.getByRole("menuitem", { name: "Our Services" });
    this.industriesNav = page.getByRole("menuitem", { name: "Industries" });
    this.ourExperienceNav = page.getByRole("menuitem", {
      name: "Our Experience",
    });
    this.insightsNav = page.getByRole("menuitem", { name: "Insights" });
    this.careersNav = page.getByRole("menuitem", { name: "Careers" });
    this.contactNav = page.getByRole("menuitem", { name: "Contact" });

    // About tab page names
    this.whoWeAreNav = page.getByRole("menuitem", { name: "Who We Are" });
    this.missionsAndValuesNav = page.getByRole("menuitem", {
      name: "Mission & Values",
    });
    this.aiEnablementNav = page.getByRole("menuitem", {
      name: "Our AI Enablement Journey",
    });

    // Slides 
    this.swiperWrapper = page.locator('.swiper-wrapper');
    this.swiperSlides = page.locator('.swiper-slide'); 
    this.goToFirstSlideButton = page.getByRole('button', { name: 'Go to slide 1' });
    this.goToSecondSlideButton = page.getByRole('button', { name: 'Go to slide 2' });
    this.goToThirdSlideButton = page.getByRole('button', { name: 'Go to slide 3' });
    this.goToFourthSlideButton = page.getByRole('button', { name: 'Go to slide 4' });

    // Slide locators
    this.firstSlide = page
      .getByRole("group", { name: "1 /" })
      .locator("div")
      .first();
    this.secondSlide = page
      .getByRole("group", { name: "2 /" })
      .locator("div")
      .first();
    this.thirdSlide = page
      .getByRole("group", { name: "3 /" })
      .locator("div")
      .first();
    this.fourthSlide = page
      .getByRole("group", { name: "4 /" })
      .locator("div")
      .first();

      // CF slides Learn More or Download buttons

    this.firstSlideLMButton = page.getByLabel('1 /').getByRole('link', { name: 'Learn more' });
    this.secondSlideDLButton = page.getByRole('link', { name: 'Download now' });
    this.thirdSlideLMButton = page.getByLabel('3 /').getByRole('link', { name: 'Learn more' });
    this.fourthSlideLMButton = page.getByLabel('4 /').getByRole('link', { name: 'Learn more' });

      // Cookie menu container

      this.cookieMenu = page.locator('#hs-eu-cookie-confirmation');

  }

    // Go to homepage

    async goToHomePage() {
        await this.page.goto("/");
    }

    // Return cookie consent message locator
    getCookieConsentMessage(): Locator {
        return this.page.getByText('This website stores cookies on your computer.');
    }
    // Wait for cookie consent message locator to be visible
    async viewCookieConsentMessage(){
        await this.cookieMenu.waitFor({ state: 'visible', timeout: 30000 });
        
    }

    /**
     * Expand nav item by hovering and waiting to become visible.
     * @param navItem Locator for the nav item (eg, 'About', 'Services')
     * @param subNavItem Locator for the sub menu item (eg, 'Who We Are' from 'About')
     */
    private async expandNavItemHover(navItem: Locator, subNavItem: Locator) {
        await navItem.hover();
        await subNavItem.waitFor({ state: 'visible', timeout: 3000 });
    }

    // Expand tab
    async expandTab(tabName: Locator, subTabName: Locator) {
       await this.expandNavItemHover(tabName, subTabName);
    }

    // Click into sub menu items for About tab
    async openWhoWeArePage() {
        this.expandTab(this.aboutNav, this.whoWeAreNav);
        this.whoWeAreNav.click();
    }

    async openMissionsAndValuesPage() {
        this.expandTab(this.aboutNav, this.missionsAndValuesNav);
        this.missionsAndValuesNav.click();
    }

    async openAiEnablementPage() {
        this.expandTab(this.aboutNav, this.aiEnablementNav);
        this.aiEnablementNav.click();
    }
   
    /**
     * Retrieves the Locator for the currently active Swiper slide.
     * @returns Locator for the active slide
     */
    async getActiveSlide(): Promise<Locator> {
        // Swiper typically uses 'swiper-slide-active' class for the current slide.
        // Or sometimes 'aria-current="true"'
        return this.page.locator('.swiper-slide.swiper-slide-active');
        // If your active slide is identifiable by aria-label:
        // return this.swiperSlides.filter({ 'aria-current': 'true' });
    }

    /**
     * Asserts that a new banner slide becomes active after a given delay.
     * This relies on the `swiper-slide-active` class changing.
     * @param newSlideContent The unique text or heading from the slide that is currently active.
     * @param timeout The maximum time to wait for a new slide to appear.
     * @returns Locator for the new active slide.
     */
    async waitForNewBannerSlide(newSlideContent: string, timeout: number = 6000): Promise<Locator> {
  
        const activeSlide = this.getActiveSlide()
        await expect(activeSlide).toContain(newSlideContent);
        return activeSlide;

    }

}
