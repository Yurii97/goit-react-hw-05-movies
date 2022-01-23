const KEY = 'dc5e320bcaeab5968e6d98b0d8f1ef98'

 function FetchTopMovie() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No movies found on request'));
  });
}
function FetchSearchMovie( query) {
  console.log(query);
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No movies found on request'));
  });
}

const API = {
  FetchTopMovie,
  FetchSearchMovie,
}

export default API