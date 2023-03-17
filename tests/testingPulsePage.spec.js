import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { LandingPage } from '../pageObjects/landingPage';
import { PulsePage } from '../pageObjects/pulsePage';

beforeEach ( async (browser) =>{

    const context = await browser.newContext()
    await context.clearCookies();
    page=await context.newPage()

})
test('Search functinality in Pulse tab', async ({ page }) => {

    await page.goto("/");
    const landingPage = new LandingPage(page)
    await expect(page).toHaveTitle(/GenTwo - Turn any investment idea into a bankable security/)
    await page.locator('#accept').click()
    await landingPage.navigateToPulsePage()
    await expect(page).toHaveTitle(/The securitization and financial products blog – GenTwo/)
    const pulsePage = new PulsePage(page)
    await pulsePage.searchInAllTab()

  });