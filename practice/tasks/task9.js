/* Create “native” method for repeat.
Example output: console.log('hello'.repeatify(3));
Expected output: hellohellohello
*/

String.prototype.repeatify = function (num) {
	let result = this;

	for (let i = 1; i < num; i++) {
		result += this;
	}

	return result;
};

console.log('hello'.repeatify(3));
