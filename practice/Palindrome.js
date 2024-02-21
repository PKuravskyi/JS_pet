// Write a function to check if a string is a palindrome

function isPalindrome(string) {
	const reversedString = string.split('').reverse().join('');

	return string === reversedString ? 'Palindrome' : 'Not a palindrome';
}

const word1 = 'level';
const word2 = 'world';

console.log(`${word1}:`, isPalindrome(word1));
console.log(`${word2}:`, isPalindrome(word2));
