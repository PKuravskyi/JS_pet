/**
 * Remove Duplicates:
 * Implement a function that removes duplicates
 * from an array while preserving the original order.
 *
 * Input example:
 * const arr = [1, 2, 3, 4, 2, 5, 6, 3];
 *
 * Output example:
 * [1, 2, 3, 4, 5, 6]
 */

const arr = [1, 2, 3, 4, 2, 5, 6, 3];

const arrayWithoutDuplicates = arr => {
	let resultArr = [];

	for (const num of arr) {
		resultArr.includes(num) ? null : resultArr.push(num);
	}

	return resultArr;
};

console.log(arrayWithoutDuplicates(arr));
