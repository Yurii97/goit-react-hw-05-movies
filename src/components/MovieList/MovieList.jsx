import { Link, useLocation } from 'react-router-dom';

function MovieList({ movieList }) {
  const location = useLocation();
  const backLink=location.pathname+location.search

  return (
    <ul>
      {movieList.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state = { {from: backLink}} >{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
