const postTemplate = document.getElementById('single-post')
const newPostForm = document.querySelector('#new-post form')
const addPostBtn = document.querySelector('#new-post button')
const fetchPostsBtn = document.querySelector('#available-posts button')
const postListEl = document.querySelector('.posts')

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      } else {
        return response.json().then(errData => {
          console.log(errData)
          throw new Error('Something went wrong - server-side!')
        })
      }
    })
    .catch(error => {
      console.log(error)
      throw new Error('Something went wrong!')
    })
}

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
    const listOfPosts = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    )
    for (const post of listOfPosts) {
      appendPost(post, post.id)
    }
  } catch (error) {
    alert(error)
  }
}

async function createPost(title, content) {
  const userId = new Date().getTime()
  const post = new FormData(newPostForm)

  post.append('userId', userId)

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
  appendPost({ title: title, body: content }, userId)
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
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${[postId]}`
    )
      .then(() => {
        document.querySelector(`li[id='${postId}']`).remove()
      })
      .catch(error => {
        alert(error.message)
      })
  }
})
