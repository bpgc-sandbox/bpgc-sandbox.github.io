import { Link, useNavigate } from "react-router-dom";

import "../styles/menu.css";
import MenuIcon from "./menuIcon";
import { useState } from "react";

function NavBar() {
  const [menuState, changeState] = useState("closed");
  const navigate = useNavigate();

  const accessHandler = () => {
    navigate("/proposal");
    changeState("closed");
  };

  return (
    <div className={`menu-${menuState}`}>
      <MenuIcon state={menuState} changeState={changeState} />
      <div className="nav-links">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                changeState("closed");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => {
                changeState("closed");
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              onClick={() => {
                changeState("closed");
              }}
            >
              Members
            </Link>
          </li>
          {/* <li>
            <Link
              to="/Facilities"
              onClick={() => {
                changeState("closed");
              }}
            >
              Facilities
            </Link>
          </li> */}
          <li>
            <Link
              to="/faq"
              onClick={() => {
                changeState("closed");
              }}
            >
              FAQs
            </Link>
          </li>
          <button className="access-form-btn" onClick={accessHandler}>
            Apply for Access
          </button>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
