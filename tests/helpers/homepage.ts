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
    this.firstSlide = page.locator('div.swiper-slide[data-swiper-slide-index="0"]');
    this.secondSlide = page.locator('div.swiper-slide[data-swiper-slide-index="1"]');
    this.thirdSlide = page.locator('div.swiper-slide[data-swiper-slide-index="2"]');
    this.fourthSlide = page.locator('div.swiper-slide[data-swiper-slide-index="3"]');

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

}
