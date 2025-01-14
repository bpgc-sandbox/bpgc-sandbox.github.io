import React, { useState } from "react";
import "../styles/faq-page.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function FaqCard({ quest, ans }) {
  const [state, changeState] = useState("closed");

  const handler = () => {
    if (state === "open") {
      changeState("closed");
    } else {
      changeState("open");
    }
  };
  return (
    <div className={`faq-card-${state}`}>
      <div className="faq-quest" onClick={handler}>
        <p>{quest}</p>
        <KeyboardArrowDownIcon className="opener" onClick={handler} />
      </div>
      <div className="faq-ans">
        <p>{ans}</p>
      </div>
    </div>
  );
}
