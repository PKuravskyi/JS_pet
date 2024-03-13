/**
 * Find Duplicates:
 * Implement a function that finds and returns all duplicates in an array.
 *
 * Input example:
 * const arr = [1, 2, 3, 4, 2, 5, 6, 3];
 *
 * Output example:
 * [2, 3]
 */

const arr = [1, 2, 3, 4, 2, 5, 6, 3];

const findDuplicatesIn = arr => {
	let arrNoDupl = [];
	let arrDupl = [];

	for (const num of arr) {
		arrNoDupl.includes(num) ? arrDupl.push(num) : arrNoDupl.push(num);
	}

	return arrDupl;
};

console.log(findDuplicatesIn(arr));
