import { test, expect } from '@playwright/test';
const {POManager} = require('../Pages/POManager')

const minPrice = "700";
const maxPrice = "900";
const sailToValue = "The Bahamas";
const durationValue = "6 - 9 Days";

test.beforeEach(async({}) =>{
  test.setTimeout(120000);
}
);

test('@SmokeTest @US1 The result grid is displayed after press search button with Sail to and Duration fields filled', async({page}) =>{
  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await BaseTC01(launchPage);
  await launchPage.pressSearchCruise();  
}
)


test('@SmokeTest @US1 The result grid is filtered when vacation buget has been modified', async({page}) => {
  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await BaseTC01(launchPage);
  await launchPage.pressSearchCruise();  
  const cruiseSearchPage = poManager.getCruiseSearchPage();
  await cruiseSearchPage.modifyVacationBudget(minPrice,maxPrice);  
}
)

test ('@SmokeTest @US1 Validate the Sort by will be sorted by low to high by default after look for the search result',async({page}) => {

  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await BaseTC01(launchPage);
  await launchPage.pressSearchCruise();  
  const cruiseSearchPage = poManager.getCruiseSearchPage();
  await cruiseSearchPage.verifyShortByDefaultValue();
}
)

test ('@SmokeTest @US2 Detail information has been displayed after click on View Itinerary link',async({page}) => {
    const poManager = new POManager(page);
    const launchPage = poManager.getLaunchPage();
    await BaseTC01(launchPage);
    await launchPage.pressSearchCruise();  
    const cruiseSearchPage = poManager.getCruiseSearchPage();
    await cruiseSearchPage.pressCruiseToViewItinerary();
    const itineraryPage = poManager.getItineraryPage();
    itineraryPage.verifyInformationPriceDesc()
}
)

test ('@SmokeTest @US2 	Each Day display information About it after Cruiser Itinerary page will be loaded ',async({page}) => {
  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await BaseTC01(launchPage);
  await launchPage.pressSearchCruise();  
  const cruiseSearchPage = poManager.getCruiseSearchPage();
  await cruiseSearchPage.pressCruiseToViewItinerary();
  const itineraryPage = poManager.getItineraryPage();
  itineraryPage.verifyAbleToReadMore()
}
)

test ('@SmokeTest @US2 Each Day display information About it after Cruiser Itinerary page will be loaded', async({page}) =>{
    const poManager = new POManager(page);
    const launchPage = poManager.getLaunchPage();
    await BaseTC01(launchPage);
    await launchPage.pressSearchCruise();  
    const cruiseSearchPage = poManager.getCruiseSearchPage();
    await cruiseSearchPage.pressCruiseToViewItinerary();
    const itineraryPage = poManager.getItineraryPage();
    itineraryPage.pressStartBooking();
}
)

async function BaseTC01(launchPage: any) {
  await launchPage.goTo();
  await launchPage.selectSailTo(sailToValue);
  await launchPage.selectDuration(durationValue);
}
