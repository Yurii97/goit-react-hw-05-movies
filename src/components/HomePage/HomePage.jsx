import { NavLink, Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HomePage;
