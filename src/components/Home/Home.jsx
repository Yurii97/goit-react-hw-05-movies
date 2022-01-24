import MovieList from '../MovieList/MovieList';
import API from '../../service/MovieApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spiner from '../Spiner/Spiner'

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    API.FetchTopMovie()
      .then(data => {
        
        setMovieList([...data.results]);
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => setLoading(false));    
  }, []);  

  return (
    <div>
      <h2>Trending today</h2>
      {loading && <Spiner/>}
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </div>
  );
}

export default Home;
