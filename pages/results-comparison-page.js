import { Selector } from 'testcafe';

class ResultsComparisonPage {
    constructor () {
        this.routeName = Selector('#lnkRoute')
        this.numOfPassengers = Selector('#lnkPassenger')
        this.pageName = Selector('#frmData span').withText('Comparison')
    }
}

export default new ResultsComparisonPage();