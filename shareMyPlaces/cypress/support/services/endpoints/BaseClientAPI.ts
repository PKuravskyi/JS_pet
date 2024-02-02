export class BaseClientApi {
	baseApiUrl: string;

	constructor() {
		this.baseApiUrl = 'https://pkuravskyi-sharemyplaces.up.railway.app/';
	}

	post = (
		endpoint: string,
		payload: object,
		responseVarName: string,
		status = 200
	) => {
		cy.request({
			method: 'POST',
			url: this.baseApiUrl + endpoint,
			body: payload,
		}).then(response => {
			this.#verifyResponse(response, status);
			this.#storeResponseBody(response, responseVarName);
		});
	};

	get = (endpoint: string, responseVarName: string, status = 200) => {
		cy.request({
			method: 'GET',
			url: this.baseApiUrl + endpoint,
		}).then(response => {
			this.#verifyResponse(response, status);
			this.#storeResponseBody(response, responseVarName);
		});
	};

	#verifyResponse(response: Cypress.Response<any>, status: number) {
		expect(response.status).to.eq(status);
	}

	#storeResponseBody(
		response: Cypress.Response<any>,
		responseVariableName: string
	) {
		cy.wrap(response.body).as(responseVariableName);
	}
}
