// ************** SYMBOLS **************
console.log('************** SYMBOLS **************');
const uid = Symbol();

const person = {
	[uid]: '1',
	id: '1',
	name: 'Pavlo',
	age: 25,
	[Symbol.toStringTag]: 'person',
};

const person_copy = { ...person };

console.log('(Before) person:', person_copy);

console.log(
	'Doing the commands:',
	`
person.uid = '10';
person[Symbol('uid')] = '100';
person[uid] = '1000';`
);
person.uid = '10';
person[Symbol('uid')] = '100';
person[uid] = '1000';

console.log('(After) person:', person);
console.log('Print object as a string:', person.toString());
console.log(
	'Print object as a string using Symbol:',
	person[Symbol.toStringTag]
);
// to default
person;

// ************** ITERATORS **************
console.log('\n\n************** ITERATORS **************');
const company = {
	employees: ['Pavlo', 'Dmytro', 'Denys', 'Yurii'],
	[Symbol.iterator]: function* employeeGenerator() {
		let currentEmployee = 0;
		while (currentEmployee < this.employees.length) {
			yield this.employees[currentEmployee];
			currentEmployee++;
		}
		console.log('ITERATION COMPLETED!');
	},
};

console.log('Employees:', company.employees);

// Iterates through company's employeeGenerator() function generator
// this calls next() method implicitly, yields the value and then immediatly stops the employeeGenerator() function execution
// each subsequent next() calls will continue the function execution at the next line, in this case 'currentEmployee++' gets executed
// after that every subsequent next() calls will have a { value: undefined, done: true } values stating that iteration is now done.
for (const iterable of company) {
	console.log('Employee:', iterable);
}

// ************** REFLECT API **************
console.log('\n\n************** REFLECT API **************');
const countries = {
	ukraine: {
		population: '43 million',
		capital: 'Kyiv',
	},
	russia: {
		population: '143 million',
		capital: 'Moscow',
	},
	japan: {
		population: '125 million',
		capital: 'Tokyo',
	},
};

console.log('Countries before Reflect.deleteProperty():', countries);
Reflect.deleteProperty(countries, 'russia');
console.log('Countries after Reflect.deleteProperty():', countries);

Reflect.setPrototypeOf(countries, {
	toString() {
		return 'this toString() function was redefined by Reflect';
	},
});
console.log('Result of "countries.toString()":', countries.toString());

// ************** PROXY API **************
console.log('\n\n************** PROXY API **************');
const passwordsHandler = {
	get(object, propertyName) {
		console.log('Property that is being used:', propertyName);
		if (propertyName === 'length') {
			return 'Not telling you :)';
		}
		return object[propertyName] || 'PASSWORD NOT FOUND';
	},
	set(object, propertyName, newValue) {
		console.log(`Changing ${propertyName} value to ${newValue}`);
		if (propertyName === 'vkontakte') {
			console.log(`It is forbidden to set password for '${propertyName}'`);
			return;
		}
		object[propertyName] = newValue;
	},
};

const passwords = {
	facebook: '12345',
	instagram: '67890',
};

const proxyPasswords = new Proxy(passwords, passwordsHandler);
console.log(proxyPasswords.facebook);
console.log(proxyPasswords.length);
proxyPasswords.vkontakte = 'qwerty';
console.log(proxyPasswords.vkontakte);
