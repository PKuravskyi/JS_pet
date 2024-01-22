import sanitizeHtml from 'sanitize-html';
import { Map } from './UI/Map';

class MyPlace {
	constructor(coordinates, address) {
		new Map(coordinates);
		const headerTitleEl = document.querySelector('header h1');
		// sanitize html value as a security measure to prevent XSS attacks
		headerTitleEl.innerHTML = sanitizeHtml(address);
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
