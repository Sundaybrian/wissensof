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

function Projects() {
  const images = [
    {
      path: "#!",
      text: "Tess Mercer",
      src:
        "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer2",
      src:
        "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src:
        "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      label: "test",
    },
    {
      path: "#!",
      text: "Tess Mercer3",
      src:
        "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
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
            naturalSlideHeight={400}
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
              {images.map((img) => (
                <Slide index={0}>
                  <Image src={img.src} />
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
