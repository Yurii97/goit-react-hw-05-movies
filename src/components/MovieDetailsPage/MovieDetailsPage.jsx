import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import API from '../../service/MovieApi';
import { toast } from 'react-toastify';
import Spiner from '../Spiner/Spiner';
import s from './MovieDetailsPage.module.css'

function MovieDetailsPage() {
  const [data, setData] = useState({});
  const [loading, setLoading]=useState(false)
  const { id } = useParams();
  const navigate = useNavigate();
  const noImgSrc= 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png'

  useEffect(() => {
    setLoading(true)
    API.FetchIdMovie(id)
      .then(data => {
        setData({ ...data });
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => setLoading(false));
  }, [id]);
    
  const handleClick = () => {
    navigate(-1);
  };

  return (<>
    {loading && <Spiner />}
    {data.hasOwnProperty('id') && (
      <div className={s.container}>
        <div className={s.description}>
          <div >
            <button type="button" onClick={handleClick}>
              Go back
            </button>
            <img
              src={data.poster_path?`https://image.tmdb.org/t/p/w500${data.poster_path}`: noImgSrc}
              alt={data.original_title}
              width="200"
              className={s.description__img}
            ></img>
          </div>
          <div className={s.description__text}>
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
        <div className={s.additionalInfo}>
          <p>Additional information</p>
          <Link to="cast">Cast</Link>
          <Link to="rewiews">Rewiews</Link>
        </div>
        <Outlet />
      </div>)}
   </>)
}

export default MovieDetailsPage;
