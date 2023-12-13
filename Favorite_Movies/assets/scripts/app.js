const backdropEl = document.getElementById('backdrop')
const entryTextEl = document.getElementById('entry-text')
const addMovieBtn = document.querySelector('header button')
const movieListEl = document.getElementById('movie-list')
// add movie modal
const addMovieModalEl = document.getElementById('add-modal')
const addMovieInputs = document.querySelectorAll('.modal__content input')
const [addMovieTitleInput, addMovieImageInput, addMovieRatingInput] =
  addMovieInputs
const inpuTitleErrorText = document.getElementById('title-error')
const inputImageErrorText = document.getElementById('image-error')
const inputRatingEmptyErrorText = document.getElementById('rating-empty-error')
const inputRatingScoreErrorText = document.getElementById('rating-score-error')
const addMovieModalCancelBtn = addMovieModalEl.querySelector('.btn--passive')
const addMovieModalAddBtn = addMovieModalEl.querySelector('.btn--success')
// delete movie modal
const deleteMovieModalEl = document.getElementById('delete-modal')
const deleteMovieModalNoBtn = deleteMovieModalEl.querySelector('.btn--passive')
const deleteMovieModalYesBtn = deleteMovieModalEl.querySelector('.btn--danger')

const userMoviesList = []

let movieToDeleteId

const displayElement = el => (el.style.display = 'block')
const undisplayElement = el => (el.style.display = 'none')
const makeVisibleElement = el => el.classList.add('visible')
const makeInvisibleElement = el => el.classList.remove('visible')

const clearAddMovieInputs = () => {
  addMovieTitleInput.value = ''
  addMovieImageInput.value = ''
  addMovieRatingInput.value = ''

  undisplayElement(inpuTitleErrorText)
  undisplayElement(inputImageErrorText)
  undisplayElement(inputRatingEmptyErrorText)
  undisplayElement(inputRatingScoreErrorText)
}

const showBackdrop = () => makeVisibleElement(backdropEl)
const hideBackdrop = () => makeInvisibleElement(backdropEl)

const showAddMovieModal = () => {
  makeVisibleElement(addMovieModalEl)
  clearAddMovieInputs()
  showBackdrop()
}

const hideAddMovieModal = () => {
  makeInvisibleElement(addMovieModalEl)
  clearAddMovieInputs()
  hideBackdrop()
}

const showDeleteMovieModal = movieId => {
  makeVisibleElement(deleteMovieModalEl)
  showBackdrop()
  movieToDeleteId = movieId
}

const hideDeleteMovieModal = () => {
  makeInvisibleElement(deleteMovieModalEl)
  hideBackdrop()
}

const deleteMovie = () => {
  for (let i = 0; i <= userMoviesList.length; i++) {
    if (userMoviesList[i].id === movieToDeleteId) {
      // delete from BE
      userMoviesList.splice(userMoviesList[i], 1)
      // delete from UI
      movieListEl.children[i].remove()
    }
    hideDeleteMovieModal()
    userMoviesList.length === 0 ? displayElement(entryTextEl) : null
  }
}

const validateAddMovieInputs = () => {
  const isEmpty = el => el.value.trim() === ''

  const displayError = (el, isEmpty) => {
    el.style.display = isEmpty ? 'block' : 'none'
  }

  const titleEmpty = isEmpty(addMovieTitleInput)
  const imageEmpty = isEmpty(addMovieImageInput)
  const ratingEmpty = isEmpty(addMovieRatingInput)
  const isInputRatingScoreValid =
    +addMovieRatingInput.value < +addMovieRatingInput.min ||
    +addMovieRatingInput.value > +addMovieRatingInput.max

  displayError(inpuTitleErrorText, titleEmpty)
  displayError(inputImageErrorText, imageEmpty)
  displayError(inputRatingEmptyErrorText, ratingEmpty)
  displayError(inputRatingScoreErrorText, isInputRatingScoreValid)

  return !(titleEmpty || imageEmpty || ratingEmpty || isInputRatingScoreValid)
}

const addMovie = () => {
  if (!validateAddMovieInputs()) return

  const movie = {
    id: new Date().getTime(),
    title: addMovieTitleInput.value,
    image: addMovieImageInput.value,
    rating: addMovieRatingInput.value,
  }

  userMoviesList.push(movie)

  hideAddMovieModal()
  clearAddMovieInputs()

  const movieItemEl = document.createElement('li')
  movieItemEl.classList.add('movie-element')
  movieItemEl.innerHTML = `
  <div class="movie-element__image">
    <img src="${movie.image}" alt="${movie.title}">
  </div>
  <div class="movie-element__info">
    <h2>${movie.title}</h2>
    <p>${movie.rating}/10 stars</p>
  </div>`

  movieListEl.appendChild(movieItemEl)
  undisplayElement(entryTextEl)
  movieItemEl.addEventListener(
    'click',
    showDeleteMovieModal.bind(null, movie.id)
  )
}

backdropEl.addEventListener('click', () => {
  showBackdrop()
  clearAddMovieInputs()
})
addMovieBtn.addEventListener('click', () => showAddMovieModal())
addMovieModalAddBtn.addEventListener('click', () => addMovie())
addMovieModalCancelBtn.addEventListener('click', () => {
  hideAddMovieModal()
  hideBackdrop()
  clearAddMovieInputs()
})
deleteMovieModalYesBtn.addEventListener('click', deleteMovie)
deleteMovieModalNoBtn.addEventListener('click', () => hideDeleteMovieModal())
