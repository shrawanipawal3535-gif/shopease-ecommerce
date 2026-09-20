import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-box">

        <div className="error-number">
          404
        </div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you are looking for
          does not exist.
        </p>

        <Link to="/" className="home-btn">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;