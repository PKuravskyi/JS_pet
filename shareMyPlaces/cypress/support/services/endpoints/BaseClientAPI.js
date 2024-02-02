export class BaseClientApi {
	constructor() {
		this.baseApiUrl = 'https://pkuravskyi-sharemyplaces.up.railway.app/';
	}

	post = (endpoint, payload, responseVarName, status = 200) => {
		cy.request({
			method: 'POST',
			url: this.baseApiUrl + endpoint,
			body: payload,
		}).then(response => {
			this.#verifyResponse(response, status);
			this.#storeResponseBody(response, responseVarName);
		});
	};

	get = (endpoint, responseVarName, status = 200) => {
		cy.request({
			method: 'GET',
			url: this.baseApiUrl + endpoint,
		}).then(response => {
			this.#verifyResponse(response, status);
			this.#storeResponseBody(response, responseVarName);
		});
	};

	#verifyResponse(response, status) {
		expect(response.status).to.eq(status);
	}

	#storeResponseBody(response, responseVariableName) {
		cy.wrap(response.body).as(responseVariableName);
	}
}
