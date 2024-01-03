const backdropEl = document.getElementById('backdrop');
const entryTextEl = document.getElementById('entry-text');
const addMovieBtn = document.getElementById('add-movie');
const movieListEl = document.getElementById('movie-list');
// add movie modal
const addMovieModalEl = document.getElementById('add-modal');
const addMovieInputs = document.querySelectorAll('.modal__content input');
const [addMovieTitleInput, addMovieImageInput, addMovieRatingInput] =
	addMovieInputs;
const inpuTitleErrorText = document.getElementById('title-error');
const inputImageErrorText = document.getElementById('image-error');
const inputRatingEmptyErrorText = document.getElementById('rating-empty-error');
const inputRatingScoreErrorText = document.getElementById('rating-score-error');
const addMovieModalCancelBtn = addMovieModalEl.querySelector('.btn--passive');
const addMovieModalAddBtn = addMovieModalEl.querySelector('.btn--success');
// delete movie modal
const deleteMovieModalEl = document.getElementById('delete-modal');
const deleteMovieModalNoBtn = deleteMovieModalEl.querySelector('.btn--passive');
const deleteMovieModalYesBtn = deleteMovieModalEl.querySelector('.btn--danger');
// filter movies modal
const sortMoviesBtn = document.getElementById('sort-movies');
const sortMoviesModalEl = document.getElementById('sort-modal');
const sortMoviesByTitleDescBtn = document.getElementById(
	'sort-title-descending'
);
const sortMoviesByTitleAscBtn = document.getElementById('sort-title-ascending');
const sortMoviesByRatingDescBtn = document.getElementById(
	'sort-rating-descending'
);
const sortMoviesByRatingAscBtn = document.getElementById(
	'sort-rating-ascending'
);
const sortMoviesCancelBtn = document.getElementById('sort-cancel');

const userMoviesList = [];

let movieToDeleteId;

const displayElement = el => (el.style.display = 'block');
const undisplayElement = el => (el.style.display = 'none');
const makeVisibleElement = el => el.classList.add('visible');
const makeInvisibleElement = el => el.classList.remove('visible');

const clearAddMovieInputs = () => {
	addMovieTitleInput.value = '';
	addMovieImageInput.value = '';
	addMovieRatingInput.value = '';

	undisplayElement(inpuTitleErrorText);
	undisplayElement(inputImageErrorText);
	undisplayElement(inputRatingEmptyErrorText);
	undisplayElement(inputRatingScoreErrorText);
};

const showBackdrop = () => makeVisibleElement(backdropEl);
const hideBackdrop = () => makeInvisibleElement(backdropEl);

const showAddMovieModal = () => {
	makeVisibleElement(addMovieModalEl);
	clearAddMovieInputs();
	showBackdrop();
};

const hideAddMovieModal = () => {
	makeInvisibleElement(addMovieModalEl);
	clearAddMovieInputs();
	hideBackdrop();
};

const showDeleteMovieModal = movieId => {
	makeVisibleElement(deleteMovieModalEl);
	showBackdrop();
	movieToDeleteId = movieId;
};

const hideDeleteMovieModal = () => {
	makeInvisibleElement(deleteMovieModalEl);
	hideBackdrop();
};

const hideSortMoviesModal = () => {
	makeInvisibleElement(sortMoviesModalEl);
	hideBackdrop();
};

const deleteMovie = () => {
	for (let i = 0; i <= userMoviesList.length; i++) {
		if (userMoviesList[i].id === movieToDeleteId) {
			// delete from BE
			userMoviesList.splice(i, 1);
			// delete from UI
			movieListEl.children[i].remove();
			hideDeleteMovieModal();
			userMoviesList.length === 0 ? displayElement(entryTextEl) : null;
			userMoviesList.length <= 1 ? makeInvisibleElement(sortMoviesBtn) : null;
			break;
		}
	}
};

const validateAddMovieInputs = () => {
	const isEmpty = el => el.value.trim() === '';

	const displayError = (el, isEmpty) => {
		el.style.display = isEmpty ? 'block' : 'none';
	};

	const titleEmpty = isEmpty(addMovieTitleInput);
	const imageEmpty = isEmpty(addMovieImageInput);
	const ratingEmpty = isEmpty(addMovieRatingInput);
	const isInputRatingScoreValid =
		+addMovieRatingInput.value < +addMovieRatingInput.min ||
		+addMovieRatingInput.value > +addMovieRatingInput.max;

	displayError(inpuTitleErrorText, titleEmpty);
	displayError(inputImageErrorText, imageEmpty);
	displayError(inputRatingEmptyErrorText, ratingEmpty);
	displayError(inputRatingScoreErrorText, isInputRatingScoreValid);

	return !(titleEmpty || imageEmpty || ratingEmpty || isInputRatingScoreValid);
};

const addMovie = () => {
	if (!validateAddMovieInputs()) return;

	const movie = {
		id: new Date().getTime(),
		title: addMovieTitleInput.value,
		image: addMovieImageInput.value,
		rating: addMovieRatingInput.value,
	};

	userMoviesList.push(movie);

	hideAddMovieModal();
	clearAddMovieInputs();

	const movieItemEl = document.createElement('li');
	movieItemEl.classList.add('movie-element');
	movieItemEl.innerHTML = `
  <div class="movie-element__image">
    <img src="${movie.image}" alt="${movie.title}">
  </div>
  <div class="movie-element__info">
    <h2 class="movie-element__title">${movie.title}</h2>
    <p class="movie-element__rating">${movie.rating}</p>
  </div>`;

	movieListEl.appendChild(movieItemEl);
	undisplayElement(entryTextEl);
	movieItemEl.addEventListener(
		'click',
		showDeleteMovieModal.bind(null, movie.id)
	);
	userMoviesList.length > 1 ? makeVisibleElement(sortMoviesBtn) : null;
};

const showSortMovies = () => {
	makeVisibleElement(sortMoviesModalEl);
	showBackdrop();
};

const getMovieRating = movie => {
	return +movie.querySelector('.movie-element__rating').innerText;
};

const sortMovies = method => {
	const movies = Array.from(movieListEl.children);

	switch (method) {
		case sortMoviesByTitleDescBtn.textContent:
			movies.sort((a, b) => b.textContent.localeCompare(a.textContent));
			userMoviesList.sort((a, b) => b.title.localeCompare(a.title));
			break;
		case sortMoviesByTitleAscBtn.textContent:
			movies.sort((a, b) => a.textContent.localeCompare(b.textContent));
			userMoviesList.sort((a, b) => a.title.localeCompare(b.title));
			break;
		case sortMoviesByRatingDescBtn.textContent:
			movies.sort((a, b) => getMovieRating(b) - getMovieRating(a));
			userMoviesList.sort((a, b) => +b.rating - +a.rating);
			break;
		case sortMoviesByRatingAscBtn.textContent:
			movies.sort((a, b) => getMovieRating(a) - getMovieRating(b));
			userMoviesList.sort((a, b) => +a.rating - +b.rating);
			break;
	}

	movies.forEach(movie => {
		movie.remove();
		movieListEl.appendChild(movie);
	});
	hideSortMoviesModal();
};

backdropEl.addEventListener('click', () => {
	showBackdrop();
	clearAddMovieInputs();
});
addMovieBtn.addEventListener('click', () => showAddMovieModal());
addMovieModalAddBtn.addEventListener('click', () => addMovie());
addMovieModalCancelBtn.addEventListener('click', () => {
	hideAddMovieModal();
	hideBackdrop();
	clearAddMovieInputs();
});
deleteMovieModalYesBtn.addEventListener('click', deleteMovie);
deleteMovieModalNoBtn.addEventListener('click', () => hideDeleteMovieModal());
sortMoviesBtn.addEventListener('click', showSortMovies);
sortMoviesByTitleDescBtn.addEventListener(
	'click',
	sortMovies.bind(null, sortMoviesByTitleDescBtn.textContent)
);
sortMoviesByTitleAscBtn.addEventListener(
	'click',
	sortMovies.bind(null, sortMoviesByTitleAscBtn.textContent)
);
sortMoviesByRatingDescBtn.addEventListener(
	'click',
	sortMovies.bind(null, sortMoviesByRatingDescBtn.textContent)
);
sortMoviesByRatingAscBtn.addEventListener(
	'click',
	sortMovies.bind(null, sortMoviesByRatingAscBtn.textContent)
);
sortMoviesCancelBtn.addEventListener('click', () => hideSortMoviesModal());
