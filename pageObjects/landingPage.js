import  { basePages } from '../fixtures/basePages';
import { use } from '../playwright.config';

export class LandingPage {

    constructor(page, isMob) {
        this.page = page;
        this.Solutions = "Solutions";
        this.Pulse = "Pulse";
        this.Company = "Company";
        this.Ecosystem = "Ecosystem";
        this.isMob= isMob;
        this.expandMenu= "expandMenu"
      }
    
    async navigateToPulsePage(){
        console.log("Is mobile view? " + this.isMobile);

        if(use.isMobile)
        {
            await this.page.click('.-mt-2')
        }
        else
        await this.page.locator('li[data-v-d14c0743] a[data-v-d14c0743]').getByText(this.Pulse).nth(0).click()
    }
    

    //navigate to other tabs
    //
    //
}