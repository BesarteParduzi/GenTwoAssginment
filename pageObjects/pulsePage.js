import { expect} from '@playwright/test';
export class PulsePage {

    pulsePageTitle = "The securitization and financial products blog – GenTwo"
    searchIcon= "button[data-v-43d59be6]"
    searchInput= "#search-input"
    searchResultsText= "section[data-v-ccd3f646] > h2"
    postcardResults= ".grid-post-cards"
    allAndBlogSubtabs= "div[data-v-f7f0a6fb] > .gap-3"
    searchTabs= "ul[data-v-eb368ca7] > li[data-v-eb368ca7]"

    constructor(page) {
        this.page = page;
        this.All = "All";
        this.Blog = "Blog";
       }
       async searchInTabs(tabName, text){
        await expect(this.page.locator(this.allAndBlogSubtabs)).toBeVisible();
        await this.page.locator(this.searchTabs).getByText(tabName).click()
        await this.page.locator(this.searchIcon).click()
        await this.page.fill(this.searchInput, text)
        await this.page.waitForLoadState('load') 
        if(tabName=='All'){
            tabName='Pulse'
        }
        console.log(tabName)
        await expect(this.page.locator(this.searchResultsText).getByText(`results for "${text}"in ${tabName}`, { exact: false })).toBeVisible()

        if(!expect(this.page.locator(this.searchResultsText).getByText('0', { exact: false })).toBeVisible()){
            await this.page.locator(this.postcardResults).toBeVisible();
        }
        else{
            await expect(this.page.locator(this.postcardResults)).not.toBeVisible();
            await expect(this.page.locator(this.searchResultsText).getByText(`0 results for "${text}"in ${tabName}`, { exact: true })).toBeVisible()
        }
       }
}