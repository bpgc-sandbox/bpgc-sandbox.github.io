import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <main>
        <div className="socials">
          <h1 className="section-header">GET IN TOUCH</h1>
          <ul className="social-links">
            <li>
              <a
                href="https://www.instagram.com/sandbox_bitsg/"
                target="_blank"
              >
                <InstagramIcon className="icon" id="insta-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/SandboxBPGC/" target="_blank">
                <FacebookIcon className="icon" id="fb-icon" />
              </a>
            </li>
            <li>
              <a href="mailto:ic.sandbox@goa.bits-pilani.ac.in" target="_blank">
                <MailOutlineIcon className="icon" id="mail-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/sandbox-innovation-lab/about/"
                target="_blank"
              >
                <LinkedInIcon className="icon" id="LI-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="address">
          <h2>ADDRESS</h2>
          <p>
            C-Wing, LT-1/2 Lawns, <br /> BITS-Pilani, K.K. Birla Goa Campus,{" "}
            <br />
            Near NH-17 Bypass road, Zuarinagar Goa, 403726
          </p>
        </div>
      </main>
      <p className="copyright">©️2024 SandBox Innovations Lab, BITS Goa</p>
    </footer>
  );
}
