import React from "react";
import "./Landing.css";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

function Landing() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default Landing;
