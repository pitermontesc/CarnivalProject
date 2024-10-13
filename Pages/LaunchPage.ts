import {test,expect,Page, Locator} from "@playwright/test"

export class LaunchPage{
    sailTo: Locator;
    sailFrom: Locator;
    Dates: Locator;
    Duration: Locator;
    searchCruises: Locator;
    page: Page;

    constructor(page:Page){
        this.page = page;       

    }
    async goTo()
    {
        await this.page.goto("https://www.carnival.com");
        await this.page.click("text=AGREE");                        
    }    
    async selectSailTo(destiny:String)
    {        
        await this.page.click("#cdc-destinations");
        await this.page.click("button[aria-label='"+destiny+" ']");        
    }
    async selectDuration(durationRange:string)
    {        
        await this.page.click("#cdc-durations");
        await this.page.click("button[aria-label='"+durationRange+" ']");        
    }
    
    async pressSearchCruise()
    {
        await this.page.click("a[class='cdc-filters-search-cta']");
        await expect(this.page.locator("//h2[@data-testid='cruisetotalResults']")).toContainText("Cruise Results");     
    }
}

module.exports = {LaunchPage};