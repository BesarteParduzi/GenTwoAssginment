import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { LandingPage } from '../pageObjects/landingPage';
import { PulsePage } from '../pageObjects/pulsePage'; 

const test = baseTest.extend({
  pulsePage: async ({ page }, use) => {
    await use(new PulsePage(page));
  },
  landingPage: async ({ page, isMobile}, use) => {
    await use(new LandingPage(page, isMobile));
  },
});

export default test;
export const expect = baseExpect;
