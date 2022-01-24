import { NavLink, Outlet } from 'react-router-dom';
import s from './HomePage.module.css'

function HomePage() {
  return (
    <div className={s.container}>
      <nav className={s.navigation}>
        <NavLink to="/" className={s.link}>Home</NavLink>
        <NavLink to="/movies"className={s.link}>Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HomePage;
