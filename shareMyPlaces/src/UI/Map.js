export class Map {
	constructor(coordinates) {
		this.render(coordinates);
	}

	async render(coordinates) {
		if (!google) {
			alert('Could not load Google Maps - please try again later!');
			return;
		}

		const { Map } = await google.maps.importLibrary('maps');

		const map = new Map(document.getElementById('map'), {
			center: coordinates,
			zoom: 15,
		});

		new google.maps.Marker({
			position: coordinates,
			map: map,
		});
	}
}
