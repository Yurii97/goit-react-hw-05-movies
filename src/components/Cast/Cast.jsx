import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../../service/MovieApi';
import { toast } from 'react-toastify';
import Spiner from '../Spiner/Spiner'
import s from './Cast.module.css'

function Cast() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const noImgSrc= 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png'

  useEffect(() => {
    setLoading(true)
    API.FetchCastMovie(id)
      .then(data => {
        setData([...data.cast]);
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => setLoading(false));
  }, [id]);
  return (<>
  
    {loading && <Spiner/>}
    <ul className={s.castList}>
      {data.map(el => (
        <li key={el.id} className={s.castList__item}>
          <img
            src={el.profile_path?`https://image.tmdb.org/t/p/w500${el.profile_path}`:noImgSrc}
            alt={el.name}
            width={150}
            height={200}
            />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
      </>
  );
}

export default Cast;
