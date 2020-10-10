import React from "react";
import Slider from "../Slider/Slider";
import person from "../../Assets/person.png";
import "./Team.css";

function Team() {
  const images = [
    {
      path: "#!",
      text: "Bernadette Orende",
      src: person,
      label: "CEO",
    },
    {
      path: "#!",
      text: "Waweru Chris Avram",
      src: person,
      label: "COO",
    },
    {
      path: "#!",
      text: "Brian Sunday",
      src: person,
      label: "CTO",
    },
    {
      path: "#!",
      text: "Conceptor Orende",
      src: person,
      label: "CFO",
    },
    {
      path: "#!",
      text: "Kevin Orende",
      src: person,
      label: "Director",
    },
    {
      path: "#!",
      text: "Sylvester Odera",
      src: person,
      label: "Director",
    },
  ];
  return (
    <div className="team container">
      <Slider images={images} title="Meet The Team" />
    </div>
  );
}

export default Team;
