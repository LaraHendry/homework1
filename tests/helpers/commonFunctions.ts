import {expect, Page, Locator} from '@playwright/test';

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
    async areLocatorsVisible(byLocator: Locator[]) {
        for (const locator of byLocator) {
            await expect(locator).toBeVisible();

        }

    }

     /**
     * Asserts that a new banner slide becomes active.
     * iterates through an array of expected slide locators and waits for each
     * to gain the 'swiper-slide-active' class in sequence
     * @param expectedSlideLocators array of Locators
     * @param slideTransitionTimeoutMs maximum time to wait for each slide to become active
     * @returns locator for the final active slide after all checks
     */
    async waitForNewBannerSlide(
        expectedSlideLocators: Locator[], 
        slideTransitionTimeoutMs: number
    ): Promise<Locator> {

        for (let i = 0; i < expectedSlideLocators.length; i++) {
            const slideLocator = expectedSlideLocators[i];
            const slideNumber = i + 1; // For logging/debugging
            await expect(slideLocator)
                  .toHaveClass(/swiper-slide-active/);

            console.log(`Slide ${slideNumber} is active (has 'swiper-slide-active' class).`);
            this.page.waitForTimeout(slideTransitionTimeoutMs)

        }
        return expectedSlideLocators[expectedSlideLocators.length - 1];
    }
}