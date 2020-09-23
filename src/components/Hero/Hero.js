import React from "react";
import "./Hero.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import Banner from "../Banner/Banner";

function Hero({ hero }) {
  return (
    <header className={hero}>
      <Banner title="We provide innovative software solutions & application development." />
      <p className="scrolldown">
        <Link className="smoothscroll" to="#about">
          <FaAngleDown />
        </Link>
      </p>
    </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
export default Hero;
