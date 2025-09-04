import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Link to={"/movies/" + movie.id} className="movie-card-box">
      {movie.image ? (
        <img src={movie.image.medium} alt={movie.name} />
      ) : (
        <div className="no-img">No Image</div>
      )}

      <h3 className="movie-title">{movie.name}</h3>
      <p className="movie-year">
        Year: {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}
      </p>
      <p className="movie-genres">
        {movie.genres && movie.genres.length > 0 ? movie.genres.join(", ") : "No genres"}
      </p>
    </Link>
  );
}

export default MovieCard;
