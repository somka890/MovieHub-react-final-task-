import { Link } from "react-router-dom";
import "./404_Not_Found.css";

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-card">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="back-btn">⬅ Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
