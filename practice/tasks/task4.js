/**
 * Count Occurrences:
 * Implement a function that counts the number
 * of occurrences of each element in an array
 * and returns an object with the count of each element.
 *
 * Input example:
 * const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
 *
 * Output example:
 * { 'apple': 3,'banana': 2,'orange': 1 }
 */

const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countOccurencesOf = arr => {
	let result = {};

	for (const item of arr) {
		result[item] ? (result[item] += 1) : (result[item] = 1);
	}

	return result;
};

console.log(countOccurencesOf(arr));
