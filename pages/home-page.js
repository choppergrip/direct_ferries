import { Selector } from 'testcafe';
import languages from '../constants';

class Language {
    constructor (text) {
        this.language = Selector('#langs a').withText(text)
    }
}

class Menu {
    constructor (text) {
        this.item = Selector('header a').withText(text)
    }
}

class HomePage {
    constructor () {
        this.mainMenu = {
            moreItem:            new Menu('More').item,
            specialOffersItem:   new Menu('Special offers').item
        };

        this.languagesList = {
            Suomi: new Language(languages.Suomi).language,
        };

        this.selectLanguageDropdown = Selector('#lang')
        this.selectedLanguage       = Selector('#lang b')
        this.header                 = Selector('#header h3')

        this.oneWayJorney  = Selector('label').withText('One way')
        this.routeOutbound = Selector('#route_outbound')

        this.numOfAdultPassengers = Selector('#sep_pax_adults_count')

        this.clearRoute          = Selector('#journey_route_parent i').withText('clear')
        this.vehicleDetails      = Selector('#dealfinder-wrapper span').withText('How are you travelling?')
        this.footPassengerOption = Selector('label').withText('Foot Passenger (no vehicle)')
        this.submit              = Selector('#deafinder-submit')

        this.routesList        = Selector('#journey_route_parent h5')
        this.firstPopularRoute = Selector('.routes.routes_outbound li').nth(0)
    }
}

export default new HomePage();
