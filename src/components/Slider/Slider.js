/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "./SliderContent";
import Slide from "./Slide";

/**
 *
 * @function Slider
 */
function Slider({ slides }) {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </div>
  );
}

const SliderCSS = css`
  position: relative;
  height: 50vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
export default Slider;
