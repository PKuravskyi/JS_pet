/**
 * Fetch Random User Data:
 * Write a function that fetches random user data
 * from the Random User Generator API asynchronously.
 * The function should make an HTTP GET request to the API endpoint,
 * wait for the response, and then log the fetched user data to the console.
 * You can use the following API endpoint: https://randomuser.me/api/.
 */

const fetchUserData = async () => {
	const apiPromise = new Promise(resolve => {
		fetch(`https://randomuser.me/api`).then(response =>
			resolve(response.json())
		);
	});

	return await apiPromise;
};

fetchUserData().then(userData => {
	console.log(userData);
});
