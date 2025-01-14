import React from "react";
import { Link } from "react-router-dom";
import sandboxLogo from "../Assets/sandbox-logo.png";

function SandboxLogo() {
  return (
    <div>
      <Link to="/">
        <img id="sandbox-logo" src={sandboxLogo} alt="" />
      </Link>
    </div>
  );
}

export default SandboxLogo;
