import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Movies from './components/Movies/Movies';
import Home from './components/Home/Home';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}>
          <Route path=":id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
