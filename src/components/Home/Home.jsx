import MovieList from '../MovieList/MovieList';
import API from '../../service/MovieApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    requestFetch();
  }, []);

  const requestFetch = () => {
    API.FetchTopMovie()
      .then(data => {
        console.log(data);
        setMovieList([...data.results]);
      })
      .catch(er => {
        toast.error(er);
      })
      .finally(() => null);
  };

  return (
    <div>
      <h2>Trending today</h2>
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </div>
  );
}

export default Home;
