import { BaseClientApi } from './BaseClientAPI';

class LocationsEndpoint extends BaseClientApi {
	ADD_LOCATION_ENDPOINT = 'add-location';
	GET_LOCATION_ENDPOINT = 'location/';

	constructor() {
		super();
	}

	addLocation(payload, responseVarName) {
		this.post(ADD_LOCATION_ENDPOINT, payload, responseVarName);
	}

	retrieveLocation(locationId, responseVarName) {
		this.get(GET_LOCATION_ENDPOINT + locationId, responseVarName);
	}
}

export const locationsEndpoint = new LocationsEndpoint();
