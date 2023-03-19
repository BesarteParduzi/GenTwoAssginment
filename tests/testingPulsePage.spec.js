import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { LandingPage } from '../pageObjects/landingPage';
import { PulsePage } from '../pageObjects/pulsePage';

beforeEach ( async (browser) =>{
    const context = await browser.newContext()
    await context.clearCookies();
    page=await context.newPage();
})

test('Search functinality in Pulse/All tab', async ({ page }) => {
  await page.goto("/");
  const landingPage = new LandingPage(page)
  await expect(page).toHaveTitle(landingPage.landingPageTitle)
  landingPage.acceptCookies();
  await landingPage.navigateToPulsePage()
  const pulsePage = new PulsePage(page)
  await expect(page).toHaveTitle(pulsePage.pulsePageTitle)
  pulsePage.validateInnerTabs();
  //navigate to search bar
  pulsePage.navigateToSearchBar('All');
  pulsePage.typeInSearchBar('jhjsb');
 
  pulsePage.validateResultMessage();
  
});
// });
// test('Search functinality in Pulse/Blog tab', async ({ page }) => {
//   await page.goto("/");

//   const landingPage = new LandingPage(page)
//   await expect(page).toHaveTitle(landingPage.landingPageTitle)
//   await page.locator('#accept').click()
//   await landingPage.navigateToPulsePage()
//   const pulsePage = new PulsePage(page)
//   await expect(page).toHaveTitle(pulsePage.pulsePageTitle)
//   await pulsePage.searchInTabs(pulsePage.Blog, 'jnlkl')

// });
// test('Search functinality in Pulse/Testimonials tab', async ({ page }) => {
//   await page.goto("/");

//   const landingPage = new LandingPage(page)
//   await expect(page).toHaveTitle(landingPage.landingPageTitle)
//   await page.locator('#accept').click()
//   await landingPage.navigateToPulsePage()
//   const pulsePage = new PulsePage(page)
//   await expect(page).toHaveTitle(pulsePage.pulsePageTitle)
//   await pulsePage.searchInTabs(pulsePage.Testimonials, 'jnlkl')

// });
// test('Search functinality in Pulse/Product Spotlights tab', async ({ page }) => {
//   await page.goto("/");

//   const landingPage = new LandingPage(page)
//   await expect(page).toHaveTitle(landingPage.landingPageTitle)
//   await page.locator('#accept').click()
//   await landingPage.navigateToPulsePage()
//   const pulsePage = new PulsePage(page)
//   await expect(page).toHaveTitle(pulsePage.pulsePageTitle)
//   await pulsePage.searchInTabs(pulsePage.ProductSpotlights, 'jnlkl')

// });
// test('Search functinality in Pulse/Use Cases tab', async ({ page }) => {
//   await page.goto("/");

//   const landingPage = new LandingPage(page)
//   await expect(page).toHaveTitle(landingPage.landingPageTitle)
//   await page.locator('#accept').click()
//   await landingPage.navigateToPulsePage()
//   const pulsePage = new PulsePage(page)
//   await expect(page).toHaveTitle(pulsePage.pulsePageTitle)
//   await pulsePage.searchInTabs(pulsePage.UseCases, 'jnlkl')

// });

  