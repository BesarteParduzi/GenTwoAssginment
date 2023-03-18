export class LandingPage {

    landingPageTitle= "GenTwo - Turn any investment idea into a bankable security"
    tabsMenu= "li[data-v-d14c0743] a[data-v-d14c0743]";
    
    constructor(page) {
        this.page = page;
        this.Solutions = "Solutions";
        this.Pulse = "Pulse";
        this.Company = "Company";
        this.Ecosystem = "Ecosystem";
      }
    async navigateToPulsePage(){
        await this.page.locator(this.tabsMenu).getByText(this.Pulse).nth(0).click()
    }
}