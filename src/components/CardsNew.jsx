function Cards(name,desc,points,social,image) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <footer>
        <h2>{name}</h2>
        <p>{desc}</p>
        <ul>
            {points.map((point,i)=>{
                <li>{point}</li>
            })}
        </ul>
      </footer>
    </div>
  );
}

export default Cards;
