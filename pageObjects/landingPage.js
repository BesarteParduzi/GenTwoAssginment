export class LandingPage {

    constructor(page) {
        this.page = page;
        this.Solutions = "Solutions";
        this.Pulse = "Pulse";
        this.Company = "Company";
        this.Ecosystem = "Ecosystem";
      }
    
    async navigateToPulsePage(){
        await this.page.locator('li[data-v-d14c0743] a[data-v-d14c0743]').getByText(this.Pulse).nth(0).click()
    }
    

    //navigate to other tabs
    //
    //
}