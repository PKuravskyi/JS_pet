// Write a function to merge two arrays into a single sorted array

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

const arr1 = [1, 5, -5];
const arr2 = [0, -6, 2];

console.log(`Merged and sorted array:`, mergeArrays(arr1, arr2));
