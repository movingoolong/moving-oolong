import React from "react";
import styled from "@emotion/styled";

const Img = styled.img`
  height: 100%;
  max-height: 3rem;
  display: inline-block;
`;

const Logo = () => (
  <Img
    src="/static/logo.png"
    alt="Moving Oolong logo featuring a tea cup with the words Moving and Oolong in speech bubbles."
  />
);

export default Logo;
