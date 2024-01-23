const GOOGLE_API_KEY = 'AIzaSyDF3JHjABtB-EwbfXZM5Fz5CsTwdEN1quE';

export async function getAddressFromCoordinates(coordinates) {
	return await axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${GOOGLE_API_KEY}`
		)
		.then(response => {
			if (response.data.error_message) {
				throw `Something went wrong with Google Maps API\nMessage: ${response.data.error_message}\nStatus: ${response.data.status}`;
			}
			return response.data.results[0].formatted_address;
		})
		.catch(error => {
			throw new Error(error);
		});
}

export async function getCoordinatesFromAddress(address) {
	const urlAddress = encodeURI(address);
	return await axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`
		)
		.then(response => {
			return response.data.results[0].geometry.location;
		})
		.catch(error => {
			throw new Error(error);
		});
}
