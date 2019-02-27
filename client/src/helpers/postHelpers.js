export function createPost(post) {
  return fetch('/post', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
}

export function getPost(id) {
  return fetch(`/post/${id}`)
    .then(res => res.json());
}

export function getAllPosts() {
  return fetch('/post').then(res => res.json());
}

export function likePost(id) {
  return fetch(`/post/like/${id}`, { method: 'PUT' })
    .then(res => res.json());
}