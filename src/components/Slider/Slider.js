import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

function Slider() {
  return <div css={SliderCSS}></div>;
}

const SliderCSS = css`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
export default Slider;
