**Direct Ferries QA test assignment**

**Tech stack:** 
- testcafe
- javascript

**Assumptions:**
- Page model used for locators, but it is not a proper page object pattern for now, all .click .typeText events should be moved to the page level
- I accessed popular routes by index, it can be locator based on the text if routes hardcoded, but approach with the index looks like more stable
- For a more complete checks related to the routes we can mock response from ferries providers and make some ui checks related to results page
- Some components like "deal finder" or "menu" is not really belong to home page and can be extracted as a separate object
- Architecture of the framework can be significantly improved, but I left it simplified as it's just a basic task for one hour.. 

**Install dependencies:**

npm install

**To run tests:**

npm test