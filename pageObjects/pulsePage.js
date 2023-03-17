import { expect} from '@playwright/test';
export class PulsePage {

    constructor(page) {
        this.page = page;
        this.All = "All";
        this.Blog = "Blog";
        this.Testimonials = "Testimonials";
        this.ProductSpotlights = "ProductSpotlights";
        this.UseCases = "UseCases"
       }

       async searchInAllTab(){
        await this.page.locator('button[data-v-43d59be6]').click()
        await this.page.fill('#search-input', 'bhbghbh')
        await this.page.waitForLoadState('load') 
        await expect(this.page.locator('h2').getByText('0 results for "bhbghbh"in Pulse')).toBeVisible()



       }
}