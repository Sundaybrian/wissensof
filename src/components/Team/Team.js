import React from "react";
import Slider from "../Slider/Slider";
import person from "../../Assets/person.png";
import "./Team.css";

function Team() {
  const images = [
    {
      path: "#!",
      text: "Tess Mercer",
      src: person,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer2",
      src: person,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src: person,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src: person,
      label: "test",
    },
  ];
  return (
    <div className="team container">
      <Slider images={images} title="Team" />
    </div>
  );
}

export default Team;
