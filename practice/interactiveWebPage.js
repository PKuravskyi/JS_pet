// Create a simple interactive webpage that allows users to
// add, remove, and edit items in a to-do list
// using JavaScript and DOM manipulation

const header = document.createElement('h1');
header.textContent = 'To-do list:';
document.body.appendChild(header);

const itemsSection = document.createElement('div');
document.body.appendChild(itemsSection);

const btnsSection = document.createElement('div');
itemsSection.insertAdjacentElement('afterend', btnsSection);

const addBtn = document.createElement('button');
addBtn.textContent = 'Add item';
addBtn.style.border = '1px solid black';
addBtn.style.marginTop = '5vh';
btnsSection.insertAdjacentElement('beforeend', addBtn);

addBtn.addEventListener('click', () => {
	const itemName = prompt('Enter item name:');

	if (itemName) {
		const item = document.createElement('h3');
		item.style.border = '1px solid black';
		item.textContent = itemName;
		itemsSection.insertAdjacentElement('beforeend', item);

		// delete btn
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		item.insertAdjacentElement('afterEnd', deleteBtn);
		deleteBtn.addEventListener('click', () => {
			if (confirm(`Delete ${item.textContent}?`)) {
				item.remove();
				editBtn.remove();
				deleteBtn.remove();
			}
		});

		// edit btn
		const editBtn = document.createElement('button');
		item.insertAdjacentElement('afterend', editBtn);
		editBtn.textContent = 'Edit';
		editBtn.addEventListener('click', event => {
			const newName = (event.target.textContent = prompt('Enter new name:'));
			item.textContent = newName;
			editBtn.setAttribute('disabled', '');
			editBtn.textContent = 'Edit (no more edit tries)';
			item.insertAdjacentElement('afterEnd', editBtn);
			editBtn;
		});
	}
});
