// Create a function to reverse the words in a sentence

function reverseWords(sentance) {
	return sentance
		.split(' ')
		.map(word => {
			return word.split('').reverse().join('');
		})
		.join(' ');
}

const sentance = 'One Two Three Four Five';
console.log(`Original: ${sentance}`, `\nReversed: ${reverseWords(sentance)}`);
