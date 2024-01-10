const clickMeBtn = document.getElementById('click-me');
const showMeBtn = document.getElementById('show-me');
const trackMeBtn = document.getElementById('track-me');

let clickCount = 1;

function greet() {
	console.log('Good day to you!');
}

function count() {
	let result = 0;
	for (let i = 0; i <= 1000000000; i++) {
		result += i;
	}
	console.log('I calculated this for you:', result);
}

function getPosition() {
	const header = document.createElement('h3');
	const promise = new Promise((resolve, reject) => {
		// navigator is handled by browser in the event loop
		navigator.geolocation.getCurrentPosition(
			posData => {
				header.textContent = `${posData.coords.latitude}, ${posData.coords.longitude}`;
				header.id = 'coords';
				trackMeBtn.insertAdjacentElement('afterend', header);
				resolve(posData);
			},
			error => {
				header.textContent = error.message;
				header.id = 'error-msg';
				trackMeBtn.insertAdjacentElement('afterend', header);
				reject(error.message);
			}
		);
	});

	if (document.getElementById('coords')) {
		document.getElementById('coords').remove();
	}
	if (document.getElementById('error-msg')) {
		document.getElementById('error-msg').remove();
	}
	header.textContent = 'Tracking position...';
	header.id = 'coords';
	trackMeBtn.insertAdjacentElement('afterend', header);

	return promise;
}

function trackMeHandler() {
	getPosition()
		.then(posData => {
			console.log('Promise: ', posData);
		})
		.catch(error => {
			console.error(error);
		});
}

function clickMeHandler() {
	const headerMsgEl = document.getElementById('click-msg');
	const logMsg = 'You clicked me!';

	if (headerMsgEl) {
		clickCount++;
		headerMsgEl.textContent = 'You clicked me ' + clickCount + ' times!';
		console.log(logMsg);
		return;
	}
	const header = document.createElement('h3');
	header.textContent = logMsg;
	header.id = 'click-msg';
	clickMeBtn.insertAdjacentElement('afterend', header);
	console.log(header.textContent);
}

function showMe() {
	const headerTextEl = document.createElement('h3');
	const headerImgEl = document.createElement('img');
	const audioEl = document.createElement('audio');
	audioEl.volume = 0.1;

	let isAudioPlaying = true;

	if (document.getElementById('hide-msg') || document.getElementById('rick')) {
		return;
	}

	function toggleAudio() {
		if (isAudioPlaying) {
			audioEl.pause();
		} else {
			audioEl.play();
		}

		isAudioPlaying = !isAudioPlaying;
	}

	function granted() {
		headerImgEl.src = './assets/images/rick.jpg';
		headerImgEl.id = 'rick';
		headerImgEl.title = 'Click to toggle audio';
		audioEl.src = './assets/audio/neverGonnaGiveYouUp.mp3';
		headerTextEl.textContent = 'Never Gonna Give You Up!';
		showMeBtn.insertAdjacentElement('afterend', headerImgEl);

		audioEl.play();
		headerImgEl.addEventListener('click', toggleAudio);
		return headerImgEl.id;
	}

	function denied() {
		headerTextEl.textContent = 'Mhhhhkay :)';
		headerTextEl.id = 'hide-msg';
		showMeBtn.insertAdjacentElement('afterend', headerTextEl);
		return headerTextEl.textContent;
	}

	const promise = new Promise((resolve, reject) => {
		// navigator is handled by browser in the event loop
		Notification.requestPermission().then(permission => {
			if (permission === 'granted') {
				resolve(granted());
			} else {
				reject(denied());
			}
		});
	});

	headerTextEl.textContent = 'Can i show you something? :)';
	headerTextEl.id = 'ask-msg';
	showMeBtn.insertAdjacentElement('afterend', headerTextEl);

	return promise;
}

async function showMeHandler() {
	try {
		const result = await showMe();
		if (result) {
			console.log('Here you go');
			console.log(result);
		}
	} catch (error) {
		console.error(error);
	}
}

clickMeBtn.addEventListener('click', clickMeHandler);
showMeBtn.addEventListener('click', showMeHandler);
trackMeBtn.addEventListener('click', trackMeHandler);

// setTimeout is handled by browser in the event loop
setTimeout(count, 1000);
greet();
