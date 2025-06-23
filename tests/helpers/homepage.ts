import { Locator, Page } from '@playwright/test';

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

    constructor (page:Page) {
        this.page = page;

        // Upper nav page names
        this.aboutNav = page.getByRole('menuitem', {name: 'About'});
        this.ourServicesNav = page.getByRole('menuitem', {name: 'Our Services'});
        this.industriesNav = page.getByRole('menuitem', {name: 'Industries'});
        this.ourExperienceNav = page.getByRole('menuitem', {name: 'Our Experience'});
        this.insightsNav = page.getByRole('menuitem', {name: 'Insights'});
        this.careersNav = page.getByRole('menuitem', {name: 'Careers'});
        this.contactNav = page.getByRole('menuitem', {name: 'Contact'});

        // About tab page names
        this.whoWeAreNav = page.getByRole('menuitem', {name: 'Who We Are'});
        this.missionsAndValuesNav = page.getByRole('menuitem', {name: 'Missions & Values'});
        this.aiEnablementNav = page.getByRole('menuitem', {name: 'Our AI Enablement Journey'});
    }

    // Go to homepage

    async goToHomePage() {
        await this.page.goto("/");
    }

    // Expand menu
    private async expandNavItem(item: Locator){
        const isExpanded = await item.getAttribute("aria-expanded");
        if (isExpanded !== "true") {
            await item.click()
        }
    }

    // About tab
    private async expandAbout() {
        this.expandNavItem(this.aboutNav);
    }

    private async openWhoWeArePage() {
        this.expandAbout();
        this.whoWeAreNav.click();
    }

    private async openMissionsAndValuesPage() {
        this.expandAbout();
        this.missionsAndValuesNav.click();
    }

    private async openAiEnablementPage() {
        this.expandAbout();
        this.aiEnablementNav.click();
    }



}