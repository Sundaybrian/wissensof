/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Arrow({ direction, handleClick }) {
  return (
    <div
      onClick={handleClick}
      css={css`
        display: flex;
        position: absolute;
        top: 50%;
        ${direction === "right" ? `right:25px` : `left:25px`};
        height: 50px;
        width: 50px;
        justify-content: center;
        border: 2px solid #f2f2f2;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;
        &:hover {
          transform: scale(1.1);
        }
        img {
          transform: translateX(${direction === "left" ? "-2" : "2"}px);
          &:focus {
            outline: 0;
          }
        }
      `}
    >
      {direction === "right" ? (
        <img src={FaAngleRight} />
      ) : (
        <img src={FaAngleLeft} />
      )}
    </div>
    /** */
  );
}

export default Arrow;
