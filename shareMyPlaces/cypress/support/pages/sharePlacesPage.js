import { BasePage } from './basePage';

class SharePlacesPage extends BasePage {
	typeIntoInput(locator, text) {
		cy.getByDataCyId(locator).type(text);
	}
}

export const sharePlacePage = new SharePlacesPage();
