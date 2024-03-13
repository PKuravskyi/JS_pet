/**
 * Flatten Array:
 * Implement a function that flattens a nested array.
 *
 * Input example:
 * const arr = [1, [2, 3], [4, [5, 6]]];
 *
 * Output example:
 * [1, 2, 3, 4, 5, 6]
 */

const arr = [1, [2, 3], [4, [5, 6]]];

const flattenedArr = arr => arr.flat(Infinity);

console.log(flattenedArr(arr));
