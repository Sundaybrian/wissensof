import React from "react";
import "./Projects.css";
import club from "../../Assets/club.png";
import Slider from "../Slider/Slider";

function Projects() {
  const images = [
    {
      path: "#!",
      text: "Tess Mercer",
      src: club,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer2",
      src: club,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src: club,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src: club,
      label: "test",
    },
  ];

  return (
    <div className="container projects">
      <Slider images={images} title="Projects" />
    </div>
  );
}

export default Projects;
