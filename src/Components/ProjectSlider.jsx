import Card from "./ProjectSliderCard";
import { Projects } from "../utils/projects";
import "../styles/projects.css";
import { useRef } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

function CardTicker() {
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
    <div className="project-section">
      <header>
        <h1 className="section-header">Ongoing Projects</h1>
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
          {Projects.map((element, i) => {
            return (
              <Card
                key={i}
                image={element.image}
                link=""
                title={element.title}
                desc={element.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardTicker;
