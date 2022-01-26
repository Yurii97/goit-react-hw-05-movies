import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import MovieList from '../../components/MovieList/MovieList';
import API from '../../service/MovieApi';
import Spiner from '../../components/Spiner/Spiner';
import { Outlet, useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading]=useState(false)
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');
  useEffect(() => {
    if (searchQuery) {
      setLoading(true)
      API.FetchSearchMovie(searchQuery)
        .then(data => (data.results.length === 0 ? toast.error('movie not found') :
            setData([...data.results])
          )    
        )
        .catch(er => {
          toast.error(er);
        })
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  const handleInputChange = ev => {
    setQuery(ev.currentTarget.value.toLowerCase());
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (query.trim() === '') {
      toast.error('enter a query');
      return;
    }
    setSearchParams({ query });
    setQuery('');
  };
  return (
    <>
      <Outlet />
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} placeholder="Search movies" />
        <button type="submit">Submit</button>
      </form>
      {loading && <Spiner />}
      {data.length > 0 && <MovieList movieList={data} />}
    </>
  );
}

export default MoviesPage;
