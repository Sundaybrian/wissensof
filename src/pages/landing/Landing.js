import React from "react";
import "./Landing.css";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Team from "../../components/Team/Team";

function Landing() {
  return (
    <>
      <Hero id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Team id="team" />
      <Contact id="contact" />
    </>
  );
}

export default Landing;
