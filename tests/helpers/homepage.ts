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

  readonly aboutMenuContainer: Locator;

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
      name: "Missions & Values",
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

      // Using selector to maintain hover state to expand upper nav items
      this.aboutMenuContainer = this.aboutNav.locator('+ ul[role="menu"].hs-menu-children-wrapper');
  }

    // Go to homepage

    async goToHomePage() {
        await this.page.goto("/");
    }

    // Get cookie consent message locator
    async getCookieConsentMessage() {
        return this.page.getByText('This website stores cookies.');
    }

    /**
     * Expand nav item by hovering and waiting to become visible.
     * @param navItem Locator for the nav item (eg, 'About', 'Services')
     * @param subNavItem Locator for the sub menu item (eg, 'Who We Are' from 'About')
     */
    private async expandNavItemHover(navItem: Locator, subNavItem: Locator) {
        await navItem.hover();
        await subNavItem.waitFor({ state: 'visible', timeout: 5000 });
    }

    // Expand About tab
    async expandAbout() {
        this.expandNavItemHover(this.aboutNav, this.whoWeAreNav);
    }

    // Click into sub menu items for About tab
    async openWhoWeArePage() {
        this.expandAbout();
        this.whoWeAreNav.click();
    }

    async openMissionsAndValuesPage() {
        this.expandAbout();
        this.missionsAndValuesNav.click();
    }

    async openAiEnablementPage() {
        this.expandAbout();
        this.aiEnablementNav.click();
    }
}
