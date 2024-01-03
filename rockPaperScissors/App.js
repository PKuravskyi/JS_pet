const startGameBtn = document.getElementById('start-game-btn');

const getUserChoice = async () => {
	const result = await Swal.fire({
		title: 'Rock, paper or scissors?',
		icon: 'question',
		showCancelButton: true,
		showDenyButton: true,
		showCloseButton: true,
		allowOutsideClick: false,
		confirmButtonText: 'Rock',
		denyButtonText: 'Paper',
		cancelButtonText: 'Scissors',
	});

	if (result.isConfirmed) {
		return 'Rock';
	} else if (result.isDenied) {
		return 'Paper';
	} else if (result.dismiss) {
		return 'Scissors';
	}
};

const getComputerChoice = () => {
	const choices = ['Rock', 'Paper', 'Scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
};

startGameBtn.addEventListener('click', async () => {
	const userChoice = await getUserChoice();
	const computerChoice = getComputerChoice();

	let result;

	if (userChoice === computerChoice) {
		result = "It's a draw!";
	} else if (
		(userChoice === 'Rock' && computerChoice === 'Scissors') ||
		(userChoice === 'Paper' && computerChoice === 'Rock') ||
		(userChoice === 'Scissors' && computerChoice === 'Paper')
	) {
		result = 'You won!';
	} else {
		result = 'Computer won!';
	}
	Swal.fire({
		title: result,
		text: `You chose '${userChoice}', computer chose '${computerChoice}'`,
	});
});
