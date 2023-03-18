import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { LandingPage } from '../pageObjects/landingPage';
import { PulsePage } from '../pageObjects/pulsePage';

beforeEach ( async (browser) =>{
    const context = await browser.newContext()
    await context.clearCookies();
    page=await context.newPage();
})
test.describe('two tests', () => {
    test('Search functinality in Pulse/All tab', async ({ page }) => {
        await page.goto("/");
    
        const landingPage = new LandingPage(page)
        await expect(page).toHaveTitle(landingPage.landingPageTitle)
        await page.locator('#accept').click()
        await landingPage.navigateToPulsePage()
        const pulsePage = new PulsePage(page)
        await expect(page).toHaveTitle(pulsePage.pulsePageTitle)
        await pulsePage.searchInTabs('All', 'njn')
    
      });
      test('Search functinality in Pulse/Blog tab', async ({ page }) => {
        await page.goto("/");
    
        const landingPage = new LandingPage(page)
        await expect(page).toHaveTitle(landingPage.landingPageTitle)
        await page.locator('#accept').click()
        await landingPage.navigateToPulsePage()
        const pulsePage = new PulsePage(page)
        await expect(page).toHaveTitle(pulsePage.pulsePageTitle)
        await pulsePage.searchInTabs('Blog', 'jnlkl')
    
      });
    
  });

  