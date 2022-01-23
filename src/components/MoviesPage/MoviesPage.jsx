import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { toast } from 'react-toastify';
import MovieList from "../MovieList/MovieList";
import API from '../../service/MovieApi'
import { Outlet } from "react-router-dom";

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  
const handleInputChange = ev => {
    setQuery(ev.currentTarget.value.toLowerCase());
  };

  const handleSubmit = ev => {
    ev.preventDefault();    
    if (query.trim() === '') {
      toast.error('enter a query');
      return;
    }
    API.FetchSearchMovie(query).then(data => {      
      setData([...data.results])
    }).catch(er => {        
        toast.error(er);
      })
      .finally(() => null);;
    setQuery('');
  };
  return (
    <>
    <Outlet/>
  <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies"/>
    <button type="submit">Submit</button>
  </form>
      {data.length > 0 && <MovieList movieList={ data}/>}
  </>);
}

export default MoviesPage;
