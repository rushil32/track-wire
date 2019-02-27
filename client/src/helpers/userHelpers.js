function postCredentials(url) {
  return function (credentials) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: credentials})
    }).then(res => res.json());
  }
}

export let login = postCredentials('/login');

export let signUp = postCredentials('/user');
