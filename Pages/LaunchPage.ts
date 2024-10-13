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
        this.sailTo = page.locator("#cdc-destinations");

    }
    async goTo()
    {
        await this.page.goto("https://www.carnival.com");
        await this.page.click("text=AGREE");                        
    }    
    async selectSailTo(destiny:String)
    {
        destiny = "The Bahamas";
        await this.sailTo.click;
        await this.page.click("button[aria-label='"+destiny+" ']");
        await this.page.pause();
        await expect(this.page.locator("a[id='cdc-destinations'] span[class='cdc-filters-tab-link-title ng-binding']")).toContainText(""+destiny);
    }
    async selectDuration(durationRange:string)
    {

    }
}

module.exports = {LaunchPage};