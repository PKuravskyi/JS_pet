/**
 * Fetch earth population from our mocked API.
 * This function should return a promise that resolves in 2 seconds returing population number.
 */
const fetchEarthPopulation = async () => {
	const apiPromise = new Promise(resolve => {
		const populationData = 8000000;

		setTimeout(() => {
			resolve(console.log(populationData));
		}, 2000);
	});

	return await apiPromise;
};

console.log(fetchEarthPopulation());
