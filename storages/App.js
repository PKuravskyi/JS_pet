const storeLocalSessionBtn = document.getElementById(
	'store-local-session-info-btn'
);
const retrieveLocalSessionBtn = document.getElementById(
	'retrieve-local-session-info-btn'
);
const storeCookiesBtn = document.getElementById('store-cookies-btn');
const retrieveCookiesBtn = document.getElementById('retrieve-cookies-btn');
const storeIndexDBBtn = document.getElementById('store-indexdb-btn');
const retrieveIndexDBBtn = document.getElementById('retrieve-indexdb-btn');

const users = {
	user1: {
		name: 'Pavlo',
		age: 25,
	},
	user2: {
		name: 'Andriy',
		age: 55,
	},
};
const dbRequest = indexedDB.open('TestStorage', 1);

let db;

storeLocalSessionBtn.addEventListener('click', () => {
	localStorage.setItem('userInfo', JSON.stringify(users.user1));
	sessionStorage.setItem('userInfo', JSON.stringify(users.user2));
});

retrieveLocalSessionBtn.addEventListener('click', () => {
	const extractedLocalInfo = localStorage.getItem('userInfo');
	const extractedSessionInfo = sessionStorage.getItem('userInfo');
	if (extractedLocalInfo) {
		console.log('The local storage userInfo is - ' + extractedLocalInfo);
	} else {
		alert('No local userInfo found!');
	}

	if (extractedSessionInfo) {
		console.log('The session storage userInfo is - ' + extractedSessionInfo);
	} else {
		alert('No session userInfo found!');
	}
});

storeCookiesBtn.addEventListener('click', () => {
	const cookie = `users=${JSON.stringify(users.user2)}; max-age=3600`;
	document.cookie = cookie;
});

retrieveCookiesBtn.addEventListener('click', () => {
	const cookies = document.cookie.split(';').map(i => i.trim());
	console.log(cookies[0].split('=')[1]);
});

dbRequest.addEventListener('success', event => {
	db = event.target.result;
});

dbRequest.addEventListener('onupgradeneeded', event => {
	db = event.target.result;
	const objStore = db.createObjectStore('products', { keyPath: 'id' });

	objStore.transaction.oncomplete = () => {
		const productsStore = db
			.transaction('products', 'readwrite')
			.objectStore('products');
		productsStore.add({ id: 'p1', title: 'First Product', price: 29.99 });
	};
});

dbRequest.addEventListener('error', event => {
	console.log('ERROR!', event);
});

storeIndexDBBtn.addEventListener('click', () => {
	if (!db) {
		return;
	}
	const productsStore = db
		.transaction('products', 'readwrite')
		.objectStore('products');
	productsStore.add({ id: 'p2', title: 'Second Product', price: 39.99 });
});

retrieveIndexDBBtn.addEventListener('click', () => {
	const productsStore = db
		.transaction('products', 'readwrite')
		.objectStore('products');
	const request = productsStore.get('p2');

	request.addEventListener('success', () => {
		console.log(request.result);
	});
});
