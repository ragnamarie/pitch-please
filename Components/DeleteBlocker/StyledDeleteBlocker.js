import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledDeleteBlocker = styled.span`
  align-self: center;
  position: relative;
  color: white;
  background-color: darkgrey;
  font-size: 14px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  border: none;
  border-radius: 30px;
  width: 117px;
  padding: 10px;
  height: 40px;
  margin-left: 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
