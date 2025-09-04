import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>🎬 Welcome to MovieHub </h1>
        <p>Step into the world of cinema. Discover, explore and enjoy your next favorite movie.</p>
        <Link to="/movies" className="btn">
          Browse Movies
        </Link>
      </div>
    </div>
  );
}

export default Home;
