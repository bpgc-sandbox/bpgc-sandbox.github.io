import React from "react";
import "../styles/menu-icon.css";

export default function MenuIcon({ state, changeState }) {
  const handler = () => {
    if (state === "open") {
      changeState("closed");
    } else {
      changeState("open");
    }
  };

  return (
    <div className={`menu-icon menu-icon-${state}`} onClick={handler}>
      <div className="line1 line"></div>
      <div className="line2 line"></div>
    </div>
  );
}
