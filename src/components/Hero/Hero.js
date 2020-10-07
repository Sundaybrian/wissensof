import React from "react";
import "./Hero.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";

import Banner from "../Banner/Banner";

function Hero({ hero }) {
  return (
    <header className={hero}>
      <Banner
        title="We provide innovative software"
        subtitle="solutions & application"
      >
        <h1>development</h1>
      </Banner>
      <p className="scrolldown">
        <Link
          className="smoothscroll"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FaAngleDown className="angle__down" />
        </Link>
      </p>
    </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
export default Hero;
