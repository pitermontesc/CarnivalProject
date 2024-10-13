import { Page } from "@playwright/test";
import { LaunchPage } from "./LaunchPage";
import { CruiseSearchPage } from "./CruiseSearchPage";

export class POManager{
    page: Page;
    launchPage: LaunchPage;
    cruiseSearchPage: CruiseSearchPage;

    constructor(page: Page)
    {
        this.page = page;
        this.launchPage= new LaunchPage(this.page);
        this.cruiseSearchPage= new CruiseSearchPage(this.page);
    }
    getLaunchPage()
    {
        return this.launchPage;
    }
    getCruiseSearchPage()
    {
        return this.cruiseSearchPage;
    }
}
module.exports = {POManager};