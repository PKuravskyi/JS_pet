import { sharePlacePage } from '../support/pages/sharePlacesPage';
import { locationsEndpoint } from '../support/services/endpoints/LocationsEndpoint';

describe('Share a Places', () => {
	beforeEach(() => {
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

	it('should be possible to find user location', () => {
		cy.getByDataCyId('locate-btn').click();
		cy.get('@getUserLocation').should('have.been.called');
		cy.verifyAddressTitleNotEmpty();
	});

	it('should be possible to add address by Find Place, UI -> BE', () => {
		cy.intercept('/add-location').as('addedLocation');

		sharePlacePage.typeIntoInput('address-input', 'Lviv');
		cy.get('button').contains('Find Place').click();

		cy.wait('@addedLocation').then(location => {
			const locationReqBody = location.request.body;

			expect(location.response.statusCode).to.eq(200);
			expect(locationReqBody.address).to.eq('Lviv');
			expect(locationReqBody.lat).to.match(/\d+/);
			expect(locationReqBody.lng).to.match(/\d+/);
		});
	});

	it('should be possible to add address by Find Place, BE -> UI', () => {
		cy.fixture('addressRequest').then(fixture => {
			locationsEndpoint.post('add-location', fixture, 'postAddress');
		});

		cy.get('@postAddress').then(postAddress => {
			cy.visit(`my-place/?location=${postAddress.locationId}`);
			cy.get('h1').should('have.text', 'Hoverla');
		});
	});
});
