interface Greetable {
	name: string;
	age: number;
}

interface Printable {
	print(): void;
}

// User class should implement all the types defined in userInterface.
// it can also have its own types but needs to use every type in interface
class User implements Greetable, Printable {
	constructor(
		public name: string,
		public age: number,
		private password: string
	) {}

	// needs to have print() method since it is defined in Printable interface
	print() {
		console.log('User name is: ' + this.name);
	}
}

class Admin extends User {
	constructor(
		name: string,
		age: number,
		password: string,
		private permissions: string[]
	) {
		super(name, age, password);
	}
}

const user = new User('Pavlo', 25, '1234');
console.log(user);

// TypeScript doesn't understand which type will be stored in DOM elements,
// meaning that all of them by default are of type'any' unless explicitly specified.
// Exclamation mark (!) indicates that the 'element can be null' error is ignored
const num1Input = document.getElementById('num1')! as HTMLInputElement;
const num2Input = document.getElementById('num2')! as HTMLInputElement;
const addBtn = <HTMLButtonElement>document.getElementById('add')!;

// Interfaces
interface CalculationContainer {
	number1: number;
	number2: number;
	result: number;
	print(): void;
}

// Generic types
// syntactic sugar would be:
// const results: CalculationContainer[] = [];
const results: Array<CalculationContainer> = [];

function addNumbers(a: number, b: number) {
	return a + b;
}

// Literal types (type) + Union types (|)
type PrintMode = 'console' | 'alert';

// Enum
enum GreetMessage {
	SAYHIWORLD,
	SAYHIUNIVERSE,
}

function printWelcomeMessage(mode: PrintMode, greetMsg: GreetMessage) {
	if (mode === 'console') {
		if (greetMsg === GreetMessage.SAYHIWORLD) {
			console.log('Hi World!');
		} else {
			console.log('Hi Universe!');
		}
	} else if (mode === 'alert') {
		if (greetMsg === GreetMessage.SAYHIWORLD) {
			alert('Hi World!');
		} else {
			alert('Hi Universe!');
		}
	}
}

printWelcomeMessage('console', GreetMessage.SAYHIWORLD);
printWelcomeMessage('alert', GreetMessage.SAYHIUNIVERSE);

console.log('Added numbers: ', addNumbers(20, 24));

addBtn.addEventListener('click', () => {
	// value() always returns string
	const num1 = +num1Input.value;
	const num2 = +num2Input.value;
	const result = addNumbers(num1, num2);
	const resultInfo: CalculationContainer = {
		number1: num1,
		number2: num2,
		result: result,
		print() {
			console.log(
				'Operation: ' + this.number1 + ' + ' + this.number2,
				'\nResult: ' + this.result
			);
		},
	};
	results.push(resultInfo);
	results[0].print();
});

// Generic types
function log<T>(value: T) {
	console.log(value);
	return value;
}

log<string>('All Hail Generics!');
log<Array<number>>([1, 2, 3]);
