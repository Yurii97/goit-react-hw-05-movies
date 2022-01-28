import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from 'react';
import Spiner from './components/Spiner/Spiner';
import Layout from './components/Layout/Layout';
import Home from './page/Home/Home';

const LazyMovies = lazy(()=>import('./components/Movies/Movies'))
const LazyMoviesPage = lazy(()=>import('./page/MoviesPage/MoviesPage'))
const LazyMovieDetailsPage =lazy(()=>import('./page/MovieDetailsPage/MovieDetailsPage'))
const LazyCast = lazy(() => import('./components/Cast/Cast'))
const LazyReviews = lazy(() => import('./components/Reviews/Reviews'))

function App() {
 
  return (
    <>
          <Suspense fallback={<Spiner/>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<LazyMovies/>}>
            <Route index element={<LazyMoviesPage />} />
            <Route path=":id" element={<LazyMovieDetailsPage />}>
              <Route path="cast" element={<LazyCast/>} />
              <Route path="rewiews" element={<LazyReviews/>} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
          </Suspense>
      <>
        <ToastContainer />
      </>
    </>
  );
}

export default App;
