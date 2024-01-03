const postTemplate = document.getElementById('single-post')
const newPostForm = document.querySelector('#new-post form')
const fetchPostsBtn = document.querySelector('#available-posts button')
const postListEl = document.querySelector('.posts')

function clearExistingPosts() {
  if (postListEl.children.length > 0) {
    const posts = Array.from(postListEl.children)
    posts.forEach(post => post.remove())
  }
}

function appendPost(post, postId) {
  const postEl = document.importNode(postTemplate.content, true)
  postEl.querySelector('h2').textContent = post.title.toUpperCase()
  postEl.querySelector('p').textContent = post.body
  postEl.querySelector('li').id = postId
  postListEl.append(postEl)
}

async function fetchPosts() {
  try {
    clearExistingPosts()
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    for (const post of response.data) {
      appendPost(post, post.id)
    }
  } catch (error) {
    alert(error.message)
  }
}

async function createPost(title, body) {
  const post = {
    title,
    body,
    userId: new Date().getTime(),
  }

  axios.post('https://jsonplaceholder.typicode.com/posts', post)
  appendPost(post, post.userId)
}

fetchPostsBtn.addEventListener('click', fetchPosts)
newPostForm.addEventListener('submit', event => {
  event.preventDefault()
  const enteredTitle = event.currentTarget.querySelector('#title').value
  const enteredContent = event.currentTarget.querySelector('#content').value

  if (enteredTitle && enteredContent) {
    createPost(enteredTitle, enteredContent)
  } else console.log('Please enter correct data')
})

postListEl.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${[postId]}`)
      .then(() => {
        document.querySelector(`li[id='${postId}']`).remove()
      })
      .catch(error => {
        alert(error.message)
      })
  }
})
