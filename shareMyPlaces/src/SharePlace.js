import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import {
	getCoordinatesFromAddress,
	getAddressFromCoordinates,
} from './Utility/Location';

class PlaceFinder {
	constructor() {
		const addressForm = document.getElementById('address-form');
		const locateUserBtn = document.getElementById('locate-btn');
		this.shareLinkInputEl = document.getElementById('share-link');
		this.shareBtn = document.getElementById('share-btn');

		this.shareBtn.addEventListener('click', this.sharePlaceHandler.bind(this));
		addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
		locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
	}

	sharePlaceHandler() {
		const link = this.shareLinkInputEl.value;
		if (link.trim() !== '') {
			window.location.href = link;
		} else {
			throw new Error('Empty link. Cannot redirect.');
		}
	}

	selectPlace(coordinates, address) {
		if (this.map) {
			this.map.render(coordinates);
		} else {
			this.map = new Map(coordinates);
		}

		fetch('https://petjs-sharemyplaces.onrender.com/add-location', {
			method: 'POST',
			body: JSON.stringify({
				address: address,
				lat: coordinates.lat,
				lng: coordinates.lng,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				const locationId = data.locationId;

				this.shareBtn.disabled = false;
				this.shareLinkInputEl.value = `${location.origin}/my-place?location=${locationId}`;
			})
			.catch(err => {
				throw new Error(err.message);
			});
	}

	locateUserHandler() {
		if (!navigator.geolocation) {
			alert(
				'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
			);
			return;
		}
		const modal = new Modal('loading-modal-content', 'Getting location...');
		modal.show();
		navigator.geolocation.getCurrentPosition(
			async successResult => {
				// create a separate class for that ?
				const coordinates = {
					lat: successResult.coords.latitude,
					lng: successResult.coords.longitude,
				};
				const address = await getAddressFromCoordinates(coordinates);
				modal.hide();
				this.selectPlace(coordinates, address);
			},
			error => {
				modal.hide();
				throw new Error(error);
			}
		);
	}

	async findAddressHandler(event) {
		event.preventDefault();
		const address = event.target.querySelector('#address').value;
		if (!address || address.trim().length === 0) {
			alert('Invalid address - please try again!');
			return;
		}
		const modal = new Modal('loading-modal-content', 'Getting location...');
		modal.show();
		try {
			const coordinates = await getCoordinatesFromAddress(address);
			this.selectPlace(coordinates, address);
		} catch {
			modal.hide();
			alert('Address was not found. Did you enter correct address?');
			return;
		}
		modal.hide();
	}
}

new PlaceFinder();
