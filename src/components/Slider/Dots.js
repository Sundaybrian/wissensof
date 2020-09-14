/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

function Dot({ active }) {
  return (
    <span
      css={css`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? "#47a4de" : "grey"};
      `}
    ></span>
  );
}

function Dots({ slides, activeIndex }) {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </div>
  );
}

export default Dots;
