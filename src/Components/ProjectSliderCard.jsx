import "../styles/projectCard.css";

function Card({ image, title, desc, points, link }) {
  return (
    <div className="project-card">
      <img src={image} alt="" />
      <footer className="card-overlay">
        <h2>{title}</h2>
        <p>{desc}</p>
      </footer>
    </div>
  );
}

export default Card;
