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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              ducimus dicta doloremque aliquam provident sequi deserunt maxime
              distinctio ullam? Quod incidunt aliquam magni neque aut
              necessitatibus laboriosam officiis, rem optio!
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              hic. Mollitia odio, earum tempore atque veniam rerum at magni
              dicta dolores sapiente odit dignissimos quasi? Eos alias aperiam
              dignissimos aut.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
