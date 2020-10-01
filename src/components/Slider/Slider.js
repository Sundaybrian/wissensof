import React from "react";
import "./Slider.css";
import Title from "../Title";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Carousel({ images, title }) {
  return (
    <CarouselProvider
      visibleSlides={2}
      naturalSlideWidth={500}
      naturalSlideHeight={496}
      totalSlides={images.length}
      infinite={true}
    >
      {" "}
      <Title title={title}>
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
                  height="auto"
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
      <div className="slider__dots">
        {images.map((dot, index) => (
          <Dot slide={index} className="slider__dot" />
        ))}
      </div>
    </CarouselProvider>
  );
}

export default Carousel;
