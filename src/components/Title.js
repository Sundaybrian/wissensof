import React from "react";
import "./Title.css";

function Title({ title, children }) {
  return (
    <div className="title mb-5">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default Title;
