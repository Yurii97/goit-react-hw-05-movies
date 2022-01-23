import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import Home from './components/Home/Home';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}>
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="rewiews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <>
        <ToastContainer />
      </>
    </>
  );
}

export default App;
