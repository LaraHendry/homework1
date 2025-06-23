import { test, expect } from '../base';
import { HomePage } from '../helpers/homepage';


test.describe('Smoke check the CreateFuture website UI', () => {

    test('Go to homepage', async ({ homepage }) => {
      await homepage.goToHomePage();
      const page = homepage.page;

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('link', {name: 'CreateFuture Logo black text'})).toBeVisible();
});

});