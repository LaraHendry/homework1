import { Locator, Page } from "@playwright/test";

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

  readonly firstBanner: Locator;
  readonly secondBanner: Locator;
  readonly thirdBanner: Locator;
  readonly fourthBanner: Locator;

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

    // CF banners
    this.firstBanner = page
      .getByRole("group", { name: "1 /" })
      .locator("div")
      .first();
    this.secondBanner = page
      .getByRole("group", { name: "2 /" })
      .locator("div")
      .first();
    this.thirdBanner = page
      .getByRole("group", { name: "3 /" })
      .locator("div")
      .first();
    this.fourthBanner = page
      .getByRole("group", { name: "4 /" })
      .locator("div")
      .first();

      // Cookie menu container

      this.cookieMenu = page.locator('#hs-eu-cookie-confirmation-inner');

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
        await this.cookieMenu.waitFor({ state: 'visible', timeout: 8000 });
        
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
