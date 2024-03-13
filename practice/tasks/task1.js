/**
 * Filter out Users by eye color.
 *
 * Input example:
 *   - Users:
 *    [
 *      { id: 1, name: 'John', eyeColor: 'blue' },
 *      { id: 2, name: 'Ann', eyeColor: 'violet' },
 *      { id: 3, name: 'Mary', eyeColor: 'blue' },
 *    ]
 *   - Eye color: 'blue'
 *
 * Output example:
 *   [
 *      { id: 1, name: 'John', eyeColor: 'blue' },
 *      { id: 3, name: 'Mary', eyeColor: 'blue' },
 *    ]
 */

const users = [
	{ id: 1, name: 'Moore Hensley', eyeColor: 'blue' },
	{ id: 2, name: 'Sharlene Bush', eyeColor: 'blue' },
	{ id: 3, name: 'Ross Vazquez', eyeColor: 'green' },
	{ id: 4, name: 'Elma Head', eyeColor: 'green' },
	{ id: 5, name: 'Carey Barr', eyeColor: 'blue' },
	{ id: 6, name: 'Blackburn Dotson', eyeColor: 'brown' },
	{ id: 7, name: 'Sheree Anthony', eyeColor: 'brown' },
];

const filterUsersByEyeColor = (users, eyeColor) => {
	return users.filter(user => user.eyeColor === eyeColor);
};

console.log(filterUsersByEyeColor(users, 'blue'));
