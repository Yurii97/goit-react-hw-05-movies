import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../../service/MovieApi';
import { toast } from 'react-toastify';

function Cast() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(data);

  useEffect(() => {
    API.FetchCastMovie(id)
      .then(data => {
        setData([...data.cast]);
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => null);
  }, [id]);
  return (
    <ul>
      {data.map(el => (
        <li key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
            alt={el.name}
            width={100}
          />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
