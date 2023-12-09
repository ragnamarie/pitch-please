import styled from "styled-components";

export const StyledTabWhite = styled.span`
  align-self: center;
  position: relative;
  background-color: white;
  font-size: 14px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  border: solid green;
  border-radius: 30px;
  width: 117px;
  padding: 10px;
  height: 40px;
  transition: background-color 0.3s ease, color 0.3s ease; /* Add a smooth transition effect for both color and background-color */

  &:hover {
    background-color: green; /* Change the background color on hover */
    color: white; /* Change the font color on hover */

    /* Override link color within the span */
    a {
      color: white !important;
    }
  }

  &:active {
    background-color: green; /* Change the background color when clicked */
    color: white; /* Change the font color when clicked */

    /* Override link color within the span */
    a {
      color: white !important;
    }
  }
`;

export const StyledTabGreen = styled.span`
  align-self: center;
  position: relative;
  color: white;
  background-color: green;
  font-size: 14px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  border: solid green;
  border-radius: 30px;
  width: 117px;
  padding: 10px;
  height: 40px;
`;
