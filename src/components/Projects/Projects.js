import React from "react";
import "./Projects.css";
import Title from "../Title";
// import Slider from "../Slider/Slider";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import club from "../../Assets/club.png";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Projects() {
  const images = [
    {
      path: "#!",
      text: "Tess Mercer",
      src: club,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer2",
      src: club,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src: club,
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src: club,
      label: "test",
    },
  ];

  return (
    <div className="container">
      <section className="projects row">
        <div className="col-sm-12">
          <CarouselProvider
            visibleSlides={2}
            naturalSlideWidth={500}
            naturalSlideHeight={496}
            totalSlides={images.length}
          >
            {" "}
            <Title title="Projects">
              <div className="buttons">
                <ButtonBack className="buttons__back control__btn">
                  <i>
                    <FaAngleLeft />
                  </i>
                </ButtonBack>
                <ButtonNext className="buttons__next control__btn">
                  <i>
                    <FaAngleRight />
                  </i>
                </ButtonNext>
              </div>
            </Title>
            <Slider>
              {images.map((img, index) => (
                <Slide index={index} className="slide">
                  <div>
                    <Card className="slide__card">
                      <CardImg
                        top
                        width="100%"
                        src={img.src}
                        alt="Card image cap"
                      />
                      <CardBody className="slide__cardbody">
                        <CardTitle>{img.text}</CardTitle>
                        <CardSubtitle>{img.label}</CardSubtitle>
                      </CardBody>
                    </Card>
                  </div>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      </section>
    </div>
  );
}

export default Projects;
