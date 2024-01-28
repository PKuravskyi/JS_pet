/// <reference types="Cypress" />

describe('Share a Places', () => {
	it('should be possible to find place by address', () => {
		cy.visit('http://localhost:8080/');
		cy.get('#address').type('Ivano-Frankivsk');
		cy.get('#find-btn').click();
	});
});
