import React from "react";
import "./About.css";
import Title from "../Title";

function About() {
  return (
    <div className="container">
      <section className="about">
        <Title title="About" />
        <div className="row">
          <div className="col-md-6">
            <p>
              {" "}
              Wissensof Technologies is a software development company that
              provides innovative solutions to complex business problems. We
              understand that every business is different, and there are no
              cookie cutter solutions. We take satisfaction in understanding
              your business in order to provide you with applications that solve
              your most pressing challenges.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Our team is committed to providing cutting edge technological
              solutions that are scalable, secure, and easy to use across
              devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
