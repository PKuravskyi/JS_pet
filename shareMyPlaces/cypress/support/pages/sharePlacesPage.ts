import { BasePage } from './basePage';

class SharePlacesPage extends BasePage {
	typeIntoInput(locator: string, text: string | number) {
		cy.getByDataCyId(locator).type(String(text));
		return cy;
	}
}

export const sharePlacePage = new SharePlacesPage();
