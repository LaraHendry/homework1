import { test as base } from "@playwright/test";

import { HomePage } from "./helpers/homepage";
import { CommonFunctions } from "./helpers/commonFunctions";

export type customFixtures = {
  homepage: HomePage;
  commonFunctions: CommonFunctions;
};

export const test = base.extend<customFixtures>({
  homepage: async ({ page }, use) => {
    const homePageHelper = new HomePage(page);
    await use(homePageHelper);
  },

  commonFunctions: async ({page}, use) => {
    const commonFunctionHelper = new CommonFunctions(page);
    await use(commonFunctionHelper);
  }
});

export { expect } from "@playwright/test";
