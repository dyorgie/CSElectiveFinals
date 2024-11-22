import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="parent-container-home">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="text-center custom-centered">
          <p className="text-small-centered">
            A guide in finding the best carinderia places near CIIT
          </p>
          <p className="text-large-centered">"Tara, kain tayo!"</p>
          <Link to="/carinderias">
            <button className="btn btn-custom">Explore Carinderias</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
