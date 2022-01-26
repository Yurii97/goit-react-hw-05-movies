import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css'

function Layout() {
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

export default Layout;
