import React from 'react'
import { Link } from "react-router-dom";
import "./Landing.css";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";




function Landing() {
    return (
        <Hero>
            <Banner title="We provide innovative software solutions & application development.">
                <Link to="/" className="btn btn-outline-primary">
                    wiss
                </Link>
            </Banner>
        </Hero>
    )
}

export default Landing
