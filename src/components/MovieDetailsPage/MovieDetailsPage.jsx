import { useState } from 'react';
import { Link, useParams, useNavigate, Outlet, useSearchParams } from 'react-router-dom';
import API from '../../service/MovieApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react/cjs/react.development';
// import Spiner from '../Spiner/Spiner';

function MovieDetailsPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    API.FetchIdMovie(id)
      .then(data => {
        setData({ ...data });
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => null);
  }, [id]);

  let navigate = useNavigate();
  // const asd = useSearchParams();
  // console.dir(navigate);
  const handleClick = () => {
    navigate('../', { replace: true });
  };

  return (
    data.hasOwnProperty('id') && (
      <>
        <div>
          <div>
            <button type="button" onClick={handleClick}>
              Go back
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.original_title}
              width="200"
            ></img>
          </div>
          <div>
            <h2>
              {data.original_title} ({data.release_date.substring(0, 4)})
            </h2>
            <span>User score: {data.vote_average * 10} % </span>
            <h3>Overview</h3>
            <p>{data.overview}</p>
            <h3>Genres</h3>
            <ul>
              {data.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <Link to="cast">Cast</Link>
          <Link to="rewiews">Rewiews</Link>
        </div>
        <Outlet />
      </>
    )
  );
}

export default MovieDetailsPage;
