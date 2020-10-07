import React from "react";

import "./Banner.css";

function Banner({ children, title, subtitle }) {
  return (
    <div className="row banner">
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      {children}
    </div>
  );
}

export default Banner;
