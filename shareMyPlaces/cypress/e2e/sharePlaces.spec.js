/// <reference types="Cypress" />
import { sharePlacePage } from '../support/pages/sharePlacesPage';

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
		sharePlacePage.typeIntoInput('address-input', 'Ivano-Frankivsk');
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

	it.only('should be possible to send and receive API call that adds location to DB', () => {
		cy.intercept(
			'POST',
			'https://pkuravskyi-sharemyplaces.up.railway.app/add-location'
		).as('postLocation');

		sharePlacePage.typeIntoInput('address-input', 'Ivano-Frankivsk');
		cy.get('button').contains('Find Place').click();

		cy.wait('@postLocation').then(api => {
			expect(api.response.statusCode).to.eq(200);
			expect(api.request.body.address).to.eq('Ivano-Frankivsk');
			expect(api.request.body.lat).to.match(/\d+/);
			expect(api.request.body.lng).to.match(/\d+/);
		});
	});
});
