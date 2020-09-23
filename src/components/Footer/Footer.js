import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="footer__wiss">
        <p>{new Date().getFullYear()} Wissensof technologies</p>
      </div>
    </div>
  );
}

export default Footer;
