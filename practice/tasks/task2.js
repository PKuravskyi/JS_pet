/**
 * Sort Users by quantity of their friends (listed in `friends` property).
 *
 * Input example:
 *   - Users:
 *    [
 *      { id: 1, name: 'John', friends: ['Mark', 'Dany'] },
 *      { id: 2, name: 'Ann', friends: [] },
 *      { id: 3, name: 'Mary', friends: ['Jay', 'Jack', 'Bobby'] },
 *      { id: 4, name: 'Illay', friends: ['Jay', 'Dany'] },
 *    ]
 *
 * Output example:
 *   [
 *      { id: 3, name: 'Mary', friends: ['Jay', 'Jack', 'Bobby'] },
 *      { id: 1, name: 'John', friends: ['Mark', 'Dany'] },
 *      { id: 4, name: 'Illay', friends: ['Jay', 'Dany'] },
 *      { id: 2, name: 'Ann', friends: [] },
 *    ]
 */

const users = [
	{ id: 1, name: 'Moore Hensley', friends: ['Sharron Pace'] },
	{
		id: 2,
		name: 'Sharlene Bush',
		friends: ['Briana Decker', 'Sharron Pace'],
	},
	{
		id: 3,
		name: 'Ross Vazquez',
		friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
	},
	{ id: 4, name: 'Elma Head', friends: ['Goldie Gentry', 'Aisha Tran'] },
	{ id: 5, name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong'] },
	{
		id: 6,
		name: 'Blackburn Dotson',
		friends: ['Jacklyn Lucas'],
	},
	{
		id: 7,
		name: 'Sheree Anthony',
		friends: ['Goldie Gentry', 'Briana Decker'],
	},
];

const sortUsersByFriendsQuantity = users => {
	return users.sort(
		(user1, user2) => user2.friends.length - user1.friends.length
	);
};

console.log(sortUsersByFriendsQuantity(users));
