// Implement a function to find the factorial of a given number

function factorialOf(number) {
	return number === 0 ? 1 : number * factorialOf(number - 1);
}

const num = 4;
console.log(`Factorial of ${num} is:`, factorialOf(num));
