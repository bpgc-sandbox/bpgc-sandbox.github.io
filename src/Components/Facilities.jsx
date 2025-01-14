import Card from "./FacilitiesCard.jsx";
import "../styles/facilities.css";
import { useRef } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { facilities } from "../utils/facilities.jsx";

function Facilities() {
  const scrollCardTicker = useRef(null);

  const handleScrollRight = (e) => {
    if (scrollCardTicker.current) {
      scrollCardTicker.current.scrollLeft += 300;
    }
  };
  const handleScrollLeft = (e) => {
    if (scrollCardTicker.current) {
      scrollCardTicker.current.scrollLeft -= 300;
    }
  };

  return (
    <div className="facilities-section">
      <header>
        <h1 className="section-header">Facilities at Sandbox</h1>
        <div className="slider-arrows">
          <ChevronLeftRoundedIcon
            id="slider-arrow-icon"
            className="arrow-icon"
            onClick={handleScrollLeft}
          />
          <ChevronRightRoundedIcon
            id="slider-arrow-icon"
            className="arrow-icon"
            onClick={handleScrollRight}
          />
        </div>
      </header>
      <div className="card-ticker" ref={scrollCardTicker}>
        <div className="ticker">
          {facilities.map((element, i) => {
            return <Card key={i} image={element.image} title={element.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Facilities;
