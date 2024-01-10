import styled from "styled-components";

export const StyledTabWhite = styled.span`
  align-self: center;
  position: relative;
  background-color: ${({ isActive }) => (isActive ? "green" : "white")};
  font-size: 14px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  border: solid ${({ isActive }) => (isActive ? "white" : "green")};
  border-radius: 30px;
  width: 117px;
  padding: 10px;
  height: 40px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  a {
    color: ${({ isActive }) => (isActive ? "white" : "green")};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  &:hover {
    border: solid white;
    background-color: green;
    color: white;

    a {
      color: white !important;
    }
  }

  &:active {
    border: solid white;
    background-color: green;
    color: white;

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
  border: solid;
  border-radius: 30px;
  width: 117px;
  padding: 10px;
  height: 40px;
`;
