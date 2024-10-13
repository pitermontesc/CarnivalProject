import { Page } from "@playwright/test";
import { LaunchPage } from "./LaunchPage";

export class POManager{
    page: Page;
    launchPage: LaunchPage;

    constructor(page: Page)
    {
        this.page = page;
        this.launchPage= new LaunchPage(this.page);
    }
    getLaunchPage()
    {
        return this.launchPage;
    }
}
module.exports = {POManager};