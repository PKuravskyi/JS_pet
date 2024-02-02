import { BaseClientApi } from './BaseClientAPI';

class LocationsEndpoint extends BaseClientApi {
	ADD_LOCATION_ENDPOINT = 'add-location';
	GET_LOCATION_ENDPOINT = 'location/';

	constructor() {
		super();
	}

	addLocation(payload: object, responseVarName: string) {
		this.post(this.ADD_LOCATION_ENDPOINT, payload, responseVarName);
	}

	retrieveLocation(locationId: string, responseVarName: string) {
		this.get(this.GET_LOCATION_ENDPOINT + locationId, responseVarName);
	}
}

export const locationsEndpoint = new LocationsEndpoint();
