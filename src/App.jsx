import { Routes, Route } from "react-router-dom";
import   Navbar            from "./components/Navbar/Navbar";
import   Home              from "./pages/Home/Home";
import   Movies            from "./pages/Movies/Movies";
import   MovieDetails      from "./pages/MovieDetails/MovieDetails";
import   About             from "./pages/About/About";
import   NotFound          from "./pages/404_Not_Found/404_Not_Found";

function App() {
  return (
    <div>
      <Navbar />
      <div className="routes-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
