import { Link, Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default HomePage;
