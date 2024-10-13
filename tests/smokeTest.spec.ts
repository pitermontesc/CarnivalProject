import { test, expect } from '@playwright/test';
const {POManager} = require('../Pages/POManager')

test.beforeEach(async({}) =>{
  test.setTimeout(120000);
}
);

test('@SmokeTest @US1 The result grid is displayed after press search button with Sail to and Duration fields filled', async({page}) =>{
  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await launchPage.goTo();  
  await launchPage.selectSailTo("The Bahamas");
  await launchPage.selectDuration("6 - 9 Days");
  await launchPage.pressSearchCruise();  
}
)

test('@SmokeTest @US1 The result grid is filtered when vacation buget has been modified', async({page}) => {
  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await launchPage.goTo();  
  await launchPage.selectSailTo("The Bahamas");
  await launchPage.selectDuration("6 - 9 Days");
  await launchPage.pressSearchCruise();  
  const cruiseSearchPage = poManager.getCruiseSearchPage();
  await cruiseSearchPage.modifyVacationBudget("700","900");  
}
)

test ('@SmokeTest @US1 Validate the Sort by will be sorted by low to high by default after look for the search result',async({page}) => {

  const poManager = new POManager(page);
  const launchPage = poManager.getLaunchPage();
  await launchPage.goTo();  
  await launchPage.selectSailTo("The Bahamas");
  await launchPage.selectDuration("6 - 9 Days");
  await launchPage.pressSearchCruise();  
  const cruiseSearchPage = poManager.getCruiseSearchPage();
  await cruiseSearchPage.verifyShortByDefaultValue();
}
)
