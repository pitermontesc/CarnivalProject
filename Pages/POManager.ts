import { Page } from "@playwright/test";
import { LaunchPage } from "./LaunchPage";
import { CruiseSearchPage } from "./CruiseSearchPage";
import { ItineraryPage } from "./ItineraryPage";

export class POManager{
    page: Page;
    launchPage: LaunchPage;
    cruiseSearchPage: CruiseSearchPage;
    itineraryPage: ItineraryPage;

    constructor(page: Page)
    {
        this.page = page;
        this.launchPage= new LaunchPage(this.page);
        this.cruiseSearchPage= new CruiseSearchPage(this.page);
        this.itineraryPage= new ItineraryPage(this.page);
    }
    getLaunchPage()
    {
        return this.launchPage;
    }
    getCruiseSearchPage()
    {
        return this.cruiseSearchPage;
    }
    getItineraryPage()
    {
        return this.itineraryPage;
    }
}
module.exports = {POManager};