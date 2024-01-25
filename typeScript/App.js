"use strict";
// User class should implement all the types defined in userInterface.
// it can also have its own types but needs to use every type in interface
class User {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    // needs to have print() method since it is defined in Printable interface
    print() {
        console.log('User name is: ' + this.name);
    }
}
class Admin extends User {
    constructor(name, age, password, permissions) {
        super(name, age, password);
        this.permissions = permissions;
    }
}
const user = new User('Pavlo', 25, '1234');
console.log(user);
// TypeScript doesn't understand which type will be stored in DOM elements,
// meaning that all of them by default are of type'any' unless explicitly specified.
// Exclamation mark (!) indicates that the 'element can be null' error is ignored
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('add');
// Generic types
// syntactic sugar would be:
// const results: CalculationContainer[] = [];
const results = [];
function addNumbers(a, b) {
    return a + b;
}
// Enum
var GreetMessage;
(function (GreetMessage) {
    GreetMessage[GreetMessage["SAYHIWORLD"] = 0] = "SAYHIWORLD";
    GreetMessage[GreetMessage["SAYHIUNIVERSE"] = 1] = "SAYHIUNIVERSE";
})(GreetMessage || (GreetMessage = {}));
function printWelcomeMessage(mode, greetMsg) {
    if (mode === 'console') {
        if (greetMsg === GreetMessage.SAYHIWORLD) {
            console.log('Hi World!');
        }
        else {
            console.log('Hi Universe!');
        }
    }
    else if (mode === 'alert') {
        if (greetMsg === GreetMessage.SAYHIWORLD) {
            alert('Hi World!');
        }
        else {
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
    const resultInfo = {
        number1: num1,
        number2: num2,
        result: result,
        print() {
            console.log('Operation: ' + this.number1 + ' + ' + this.number2, '\nResult: ' + this.result);
        },
    };
    results.push(resultInfo);
    results[0].print();
});
// Generic types
function log(value) {
    console.log(value);
    return value;
}
log('All Hail Generics!');
log([1, 2, 3]);
