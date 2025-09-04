import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/movies" className="navbar-link">
        Movies
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
