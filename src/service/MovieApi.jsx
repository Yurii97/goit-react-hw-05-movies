const KEY = 'dc5e320bcaeab5968e6d98b0d8f1ef98';

function sendRequest(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No movies found on request'));
  });
}

function FetchTopMovie() {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  return sendRequest(url);
}
function FetchSearchMovie(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  return sendRequest(url);
}
function FetchIdMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  return sendRequest(url);
}
function FetchCastMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  return sendRequest(url);
}
function FetchRewiewsMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return sendRequest(url);
}

const API = {
  FetchTopMovie,
  FetchSearchMovie,
  FetchIdMovie,
  FetchCastMovie,
  FetchRewiewsMovie,
};

export default API;
