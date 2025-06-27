import {expect, Page} from '@playwright/test';

export class CommonFunctions {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Checks whether multiple locators are visible or not on the given page
     * @param page page
     * @param byLocator locator, selector, test attribute
     */
    async areLocatorsVisible(byLocator: string[]) {
        for (const locator of byLocator) {
            await expect(this.page.locator(locator)).toBeVisible();
        }

    }
}