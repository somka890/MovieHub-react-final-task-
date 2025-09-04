import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import "./Movies.css";

function Movies() {
  const [allTheMovies, setAllTheMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        console.log("got movies:", data);
        setAllTheMovies(data.slice(0, 20));
        setLoading(false);
      })
      .catch((err) => {
        console.log("error happened", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading movies please wait...</p>;
  }

  return (
    <div className="movies-box">
      <h1 className="movies-h1">All Movies/Shows</h1>
      <MovieList movies={allTheMovies} />
    </div>
  );
}

export default Movies;
