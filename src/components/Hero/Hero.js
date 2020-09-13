import React from 'react'
import "./Hero.css";
import {
    FaAngleDown
} from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import Banner from "../Banner/Banner";


function Hero({ hero }) {
    return (
        <header className={hero}>
            <Navbar />
            <Banner title="We provide innovative software solutions & application development." />
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><FaAngleDown /></a>
            </p>

        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero",
}
export default Hero
