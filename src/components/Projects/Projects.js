import React from "react";
import "./Projects.css";
import Title from "../Title";
import Slider from "../Slider/Slider";

function Projects() {
  return (
    <div className="container">
      <section className="projects">
        <Title title="Projects" />
        <div className="row">
          <Slider />
        </div>
      </section>
    </div>
  );
}

export default Projects;
