/// <reference types="Cypress" />
import { sharePlacePage } from '../support/pages/sharePlacesPage';

describe('My Place', () => {
	beforeEach(() => {
		cy.fixture('coordinates.json').as('coords');
		cy.visit('/');
	});

	it('should be possible to mock API to get different address', () => {
		cy.intercept(
			'GET',
			'https://pkuravskyi-sharemyplaces.up.railway.app/location/*',
			{ fixture: 'addressResponse.json' } // .json extension can be ommited, cypress looks for .json by default
		).as('getLocation');

		sharePlacePage.typeIntoInput('address-input', 'Japan Tokyo');
		cy.get('button').contains('Find Place').click();
		cy.get('#share-btn').click();

		cy.wait('@getLocation');
		cy.get('h1').should('have.text', 'Chicago - Cloud Gate');
	});
});
