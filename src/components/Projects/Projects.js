import React from "react";
import "./Projects.css";
import club from "../../Assets/club.png";
import anita from "../../Assets/anitas.JPG";
import Slider from "../Slider/Slider";

function Projects() {
    const images = [
        {
            path: "#!",
            text: "Phoenix Ticketing",
            src: club,
            label: "",
        },
        {
            path: "#!",
            text: "Anitas Kitchen",
            src: anita,
            label: "",
        },
        // {
        //     path: "#!",
        //     text: "Massive Ticketing",
        //     src: club,
        //     label: "",
        // },
        // {
        //     path: "#!",
        //     text: "Tess Mercer3",
        //     src: club,
        //     label: "",
        // },
    ];

    return (
        <div className="container projects">
            <Slider images={images} title="Our Projects" />
        </div>
    );
}

export default Projects;
