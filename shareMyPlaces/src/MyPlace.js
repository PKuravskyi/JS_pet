import { Map } from './UI/Map';

class MyPlace {
	constructor(coordinates, address) {
		new Map(coordinates);
		const headerTitleEl = document.querySelector('header h1');
		headerTitleEl.textContent = address;
	}
}

const url = new URL(location.href);
const queryParams = url.searchParams;
const locationId = queryParams.get('location');

if (locationId) {
	fetch('http://localhost:3002/location/' + locationId)
		.then(response => {
			if (!response.ok) {
				throw new Error('Could not find location!');
			}
			return response.json();
		})
		.then(data => {
			new MyPlace(data.coordinates, data.address);
		})
		.catch(err => {
			alert(err.message);
		});
}
