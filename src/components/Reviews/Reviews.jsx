import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../../service/MovieApi';
import { toast } from 'react-toastify';
import Spiner from '../Spiner/Spiner';

function Reviews() {
  const [data, setData] = useState([]);
  const { id } = useParams();
const [loading, setLoading]=useState(false)
  

  useEffect(() => {
    setLoading(true)
    API.FetchRewiewsMovie(id)
      .then(data => {        
        setData([...data.results]);
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <ul>
      {loading && <Spiner />}
{data.length>0?data.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p> {content}</p>          
        </li>
      )):<span>Reviews not found</span>}      
    </ul>
  );
}

export default Reviews;
