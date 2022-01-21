const KEY = 'dc5e320bcaeab5968e6d98b0d8f1ef98'

export function FetchTopMovie() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No movies found on request'));
  });
}


