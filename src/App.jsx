import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import Spiner from './components/Spiner/Spiner';
import HomePage from './components/HomePage/HomePage'
import Home from './components/Home/Home'

const LazyMovies = lazy(()=>import('./components/Movies/Movies'))
const LazyMoviesPage = lazy(()=>import('./components/MoviesPage/MoviesPage'))
const LazyMovieDetailsPage =lazy(()=>import('./components/MovieDetailsPage/MovieDetailsPage'))
const LazyCast = lazy(() => import('./components/Cast/Cast'))
const LazyReviews = lazy(() => import('./components/Reviews/Reviews'))
const LazyNotFound = lazy(() => import('./components/NotFound/NotFound'))

function App() {
 
  return (
    <>
          <Suspense fallback={<Spiner/>}>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<LazyMovies/>}>
            <Route index element={<LazyMoviesPage />} />
            <Route path=":id" element={<LazyMovieDetailsPage />}>
              <Route path="cast" element={<LazyCast/>} />
              <Route path="rewiews" element={<LazyReviews/>} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<LazyNotFound/>}/>
      </Routes>
          </Suspense>
      <>
        <ToastContainer />
      </>
    </>
  );
}

export default App;
