import React from "react";
import "./Projects.css";
import Title from "../Title";
import Slider from "../Slider/Slider";

function Projects() {
  const images = [
    "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  ];

  return (
    <div className="container">
      <section className="projects">
        <Title title="Projects" />
        <Slider slides={images} />
      </section>
    </div>
  );
}

export default Projects;
