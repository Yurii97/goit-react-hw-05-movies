import MovieList from '../MovieList/MovieList';
import { FetchTopMovie } from '../../service/MovieApi';
import { useEffect, useState } from 'react';

function Home() {

  const [movieList, setMovieList]=useState([])
  
  useEffect(() => {
  requestFetch()
},[])

  const requestFetch = () => {
  FetchTopMovie().then(data=>{
    setMovieList([...data.results])
  })
  }
  
  return (
    <div>
      <h2>Trending today</h2>
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </div>
  );
}

export default Home;
