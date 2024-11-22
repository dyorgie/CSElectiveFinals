
import "./HomePage.css";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="parent-container-home">
      <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="text-center custom-centered">
          <p class="text-small-centered">
            A guide in finding the best carinderia places near CIIT
          </p>
          <p class="text-large-centered">"Tara, kain tayo!"</p>
          <Link to="/carinderias">
            <button class="btn btn-custom">Explore Carinderias</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

