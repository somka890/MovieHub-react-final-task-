import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log("single movie:", data);
        setFilm(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error fetching movie", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (!film) return <p>Sorry no movie found</p>;

  return (
    <div className="movie-box">
      <h1>{film.name}</h1>
      {film.image && <img src={film.image.original} alt={film.name} className="poster-img" />}

      <div className="movie-info">
        <p>Premiered: {film.premiered || "N/A"}</p>
        <p>Genres: {film.genres && film.genres.length > 0 ? film.genres.join(", ") : "N/A"}</p>
        <p>Language: {film.language}</p>
        <p>Rating: {film.rating?.average || "N/A"}</p>
      </div>

      <div
        className="movie-summary"
        dangerouslySetInnerHTML={{ __html: film.summary }}
      />

      <Link to="/movies" className="back-btn">⬅ Back to Movies</Link>
    </div>
  );
}

export default MovieDetails;
