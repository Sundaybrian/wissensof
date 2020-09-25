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
      <Hero />
      <About />
      <Projects />
      <Team />
      <Contact />
    </>
  );
}

export default Landing;
