import { test as base} from '@playwright/test';

import { HomePage } from './helpers/homepage';

export type customFixtures = {
    homepage: HomePage;
};

export const test = base.extend<customFixtures>({

    homepage: async ({ page }, use) => {
        const homePageHelper = new HomePage(page);
        await use(homePageHelper);
    }
});

export {expect} from '@playwright/test';