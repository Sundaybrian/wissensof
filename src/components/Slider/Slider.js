/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";
import Title from "../Title";

/**
 *
 * @function Slider
 */
function Slider({ slides }) {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      translate: activeIndex - 1,
      activeIndex: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <div>
      <div css={SliderHeader}>
        <Title title="testing" />
        <div css={SliderArrows}>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </div>
      </div>
      <div css={SliderCSS}>
        <SliderContent
          translate={translate}
          transition={transition}
          width={getWidth() * slides.length}
        >
          {slides.map((slide, i) => (
            <Slide key={slide + i} content={slide} />
          ))}
        </SliderContent>

        <Dots slides={slides} activeIndex={activeIndex} />
      </div>
    </div>
  );
}

const SliderCSS = css`
  position: relative;
  // height: 60vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const SliderHeader = css`
  display: flex;
  justify-content: space-between;
  background: red;
`;

const SliderArrows = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Slider;
