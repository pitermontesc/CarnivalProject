import {test,expect,Page, Locator} from "@playwright/test"

const timeOutValue = 5000;
export class ItineraryPage{
    startBooking: Locator;
    readMore: Locator;
    thingsToDo: Locator;
    shoreExcursions: Locator;

    page: Page;

    constructor(page:Page){
        this.page = page;       

    }

    async verifyInformationPriceDesc()
    {
        await expect(this.page.locator("div[data-testid='cruiseGlanceTitle']")).not.toBeEmpty();
        await expect(this.page.locator("div[data-testid='price']")).not.toBeEmpty();
        await expect(this.page.locator("button[data-testid='whatsIncludedLink']")).toBeVisible();
        await expect(this.page.locator("div[data-testid='readMore']").first()).not.toBeEmpty();
    }   
    
    async verifyAbleToReadMore()
    {        
        await this.page.locator("//button[span[text()='Read more']]").first().click();
        await expect(this.page.locator("//button[span[text()='Read less']]").first()).toBeVisible();        
    }

    async pressStartBooking()
    {
        await this.page.click("//span[normalize-space()='START BOOKING']");
        await this.page.waitForTimeout(timeOutValue);        
        await expect(this.page.locator("//h2[normalize-space()='Add Rooms or Guests']")).not.toBeEmpty();
    }

}

module.exports = {ItineraryPage};