import "../styles/facilitiesCard.css";

function Card({ image, title }) {
  return (
    <div className="facility-card">
      <img src={image} alt="" />
      <footer className="card-overlay">
        <h2>{title}</h2>
      </footer>
    </div>
  );
}

export default Card;
