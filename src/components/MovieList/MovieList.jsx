import { Link } from "react-router-dom";

function MovieList({ movieList }) {
  console.log(movieList)
  return <ul>MovieList
    {movieList.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
    ))}
  </ul>;
}

export default MovieList;
 