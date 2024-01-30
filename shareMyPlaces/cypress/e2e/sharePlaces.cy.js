/// <reference types="Cypress" />

describe('Share a Places', () => {
	beforeEach(() => {
		cy.clock();
		cy.fixture('coordinates.json').as('coords');
		cy.visit('/').then(win => {
			cy.get('@coords').then(coords => {
				cy.stub(win.navigator.geolocation, 'getCurrentPosition')
					.as('getUserLocation')
					.callsFake(
						successCallback => {
							successCallback(coords);
						},
						errorCallback => {
							errorCallback(new Error('Geolocation error'));
						}
					);
			});
		});
	});

	it('should be possible to find place by address', () => {
		cy.getByDataCyId('address-input').type('Ivano-Frankivsk');
		cy.get('button').contains('Find Place').click();
		cy.tick(3000);
		cy.verifyAddressTitleNotEmpty();
	});

	it('should be possible to find user location', () => {
		cy.getByDataCyId('locate-btn').click();
		cy.tick(3000);
		cy.get('@getUserLocation').should('have.been.called');
		cy.verifyAddressTitleNotEmpty();
	});
});
