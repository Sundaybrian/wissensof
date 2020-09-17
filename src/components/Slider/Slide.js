/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Slide({ content }) {
  {
    /*
        css={css`
        height: auto;
        width: 100%;
        background-image: url("${content}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
      `}
  */
  }
  return (
    <div>
      <Card height="552px">
        <CardImg
          css={css`
            height: 400px;
            width: 100%;
            background-image: url("${content}");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          `}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Lorem ipsum dolor sit amet consectetur.</CardTitle>
          <CardSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio!
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default Slide;
