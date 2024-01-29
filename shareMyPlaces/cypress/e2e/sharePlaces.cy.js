/// <reference types="Cypress" />

describe('Share a Places', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should be possible to find place by address', () => {
		cy.getByDataCyId('address-input').type('Ivano-Frankivsk');
		cy.get('button').contains('Find Place').click();
		cy.verifyAddressTitleNotEmpty();
	});

	it('should be possible to find user location', () => {
		cy.getByDataCyId('locate-btn').click();
		cy.verifyAddressTitleNotEmpty();
	});
});
