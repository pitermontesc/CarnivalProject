import {test,expect,Page, Locator} from "@playwright/test"

const timeOutValue = 5000;
export class CruiseSearchPage{
    sailTo: Locator;
    sailFrom: Locator;
    Dates: Locator;
    Duration: Locator;
    vacationBudgetFilterBy: Locator;

    page: Page;

    constructor(page:Page){
        this.page = page;       

    }
    async modifyVacationBudget(minBuget:String, maxBuget:string)
    {      
        const initialResultSearch = this.page.locator("//h2[@data-testid='cruisetotalResults']").textContent();        
        await this.page.click("//div[contains(text(),'Vacation Budget')]");
        await this.page.locator("//input[@id='input-min-price']").fill(""+minBuget);
        await this.page.locator("//input[@id='input-max-price']").fill(""+maxBuget);
        const finalResultSearch = this.page.locator("//h2[@data-testid='cruisetotalResults']").textContent();
        await expect(finalResultSearch).not.toContain(initialResultSearch);
    }
    async pressSearchCruise()
    {
        await this.page.click("a[class='cdc-filters-search-cta']");
        await this.page.waitForTimeout(timeOutValue);
        await expect(this.page.locator("//h2[@data-testid='cruisetotalResults']")).toContainText("Cruise Results");
    }
    async verifyShortByDefaultValue()
    {        
        await expect(this.page.locator("//div[select[@aria-label='Sort By:']]")).toContainText("Low to High");        
    }
    async pressCruiseToViewItinerary()
    {
        await this.page.locator("//div//a[contains(text(),'View Itinerary')]").first().click(); 
        await this.page.waitForTimeout(timeOutValue);        
    }

}

module.exports = {CruiseSearchPage};