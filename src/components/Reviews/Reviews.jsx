import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../../service/MovieApi';
import { toast } from 'react-toastify';

function Reviews() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(data);

  useEffect(() => {
    API.FetchRewiewsMovie(id)
      .then(data => {
        console.log(data);
        setData([...data.results]);
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => null);
  }, [id]);

  return (
    <ul>
      {data.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p> {content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
