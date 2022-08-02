import HomePage from './pages/home-page';
import ResultsComparisonPage from './pages/results-comparison-page'
import config from './config.json'
import languages from './constants';

const SUOMI_HEADER_TEXT = 'Maailman ykkösellä teet parhaat varaukset'

fixture`Open home page`
    .page `${config.base_url}`

test('[Language] Change site language', async t => {
		const page = HomePage
		await t
			.click(page.mainMenu.moreItem)
			.click(page.mainMenu.specialOffersItem)
			.click(page.selectLanguageDropdown)
			.click(page.languagesList.Suomi)
			.expect(page.header.innerText).eql(SUOMI_HEADER_TEXT)
			.expect(page.selectedLanguage.innerText).eql(languages.Suomi)
});

test('[Deal finder] Select popular route with default settings', async t => {
		var page = HomePage
		await t
			.click(page.oneWayJorney)
			.click(page.firstPopularRoute)
			.click(page.vehicleDetails)
			.click(page.footPassengerOption)

		const routeName = await page.routeOutbound.value
		const numOfPassengers = await page.numOfAdultPassengers.innerText

		await t
			.click(page.submit)

		page = ResultsComparisonPage
		await t
			.expect(page.pageName.exists).ok()
			.expect(page.routeName.innerText).eql(routeName)
			.expect(page.numOfPassengers.innerText).eql(`${numOfPassengers} Passengers`)
});

test('[Deal finder] Clear outbound route field', async t => {
		const page = HomePage
		await t
			.typeText(page.routeOutbound, 'Mallorca')
			.expect(page.routeOutbound.value).eql('Mallorca')
			.click(page.clearRoute)
			.expect(page.routeOutbound.value).eql('')
});

test('[Deal finder] No routes found', async t => {
		const page = HomePage
		await t
			.typeText(page.routeOutbound, 'wrong route...')
			.expect(page.routesList.innerText).eql('No Routes Found')
});