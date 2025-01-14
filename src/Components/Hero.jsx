import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>
          <span>Sandbox</span> Innovations Lab
        </h1>
        <p>BITS Pilani, K.K. Birla Goa Campus's Incubation Centre</p>
        <div className="hero-btns">
          <a className="about-btn btn" href="#about-section">
            About Us
          </a>
          <button
            className="access-btn btn"
            onClick={() => {
              navigate("/proposal");
            }}
          >
            Access to Sandbox
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
