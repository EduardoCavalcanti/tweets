function apiUrl(urlPath) {
  const { hostname, protocol } = window.location;

  return `${protocol}//${hostname}:8000/api${urlPath}`;
}

export function getTweets() {
  return fetch(apiUrl('/tweets/'))
    .then((response) => response.json())
}

export function createTweet(form) {
  let data = new FormData(form);
  let attrs = {
    method: 'POST',
    body: data
  };

  return fetch(apiUrl('/tweets/'), attrs)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Ops!');
    });
}

export function deleteTweet(id) {
  return fetch(apiUrl(`/tweets/${id}/`), {
    method: 'DELETE'
  });
}
