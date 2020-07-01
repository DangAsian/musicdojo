import React from "react";
import styled, {
  css
} from "styled-components";


const sizes = {
  sm: css `
    font-size: 23px;
    padding: 15px 35px;
    border-radius: 30px;

  `,
  md: css `
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 30px;
  `,
  lg: css `
    font-size: 23px;
    padding: 15px 35px;
    border-radius: 30px;
  `,
}

const colors = {
  yellow: css `
    background-color: #F6BF42;
    color: #fff;
  `,
  red: css `
    background-color: #C76465;
    color: #fff;
  `
}

export const Button = styled.button(({
  color,
  size = 'md'
}) => `
  border-width: 0px;
  color: #fff;
  cursor: pointer;
  ${colors[color]};
  ${sizes[size]};
`)