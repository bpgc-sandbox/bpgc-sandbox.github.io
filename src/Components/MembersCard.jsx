import React from "react";
import "../styles/members-page.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MembersCard({ image, name, linkedin, mail }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="member-card"
    >
      <footer className="card-overlay">
        <h3>{name}</h3>
        <ul>
          <li>
            <a href={"mailto:" + mail} target="noopener noreferrer">
              <MailOutlineIcon className="icon" id="mail-icon" />
            </a>
          </li>
          <li>
            <a href={linkedin} target="noreferrer noopener">
              <LinkedInIcon className="icon" id="li-icon" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
