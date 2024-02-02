import { sharePlacePage } from '../support/pages/sharePlacesPage';

describe('My Place', () => {
	it('should be possible to mock API call to get different address', () => {
		cy.visit('/');

		cy.intercept('GET', '**/location/*', { fixture: 'addressResponse' }).as(
			'getLocation'
		);

		sharePlacePage.typeIntoInput('address-input', 'Japan Tokyo');
		cy.get('button').contains('Find Place').click();
		cy.get('#share-btn').click();

		cy.wait('@getLocation');
		cy.get('h1').should('have.text', 'Chicago - Cloud Gate');
	});
});
