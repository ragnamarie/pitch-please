import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledPolygon = styled.svg`
  width: 88px;
`;

export const Wrapper = styled.div`
  padding: 30px;
  display: grid;
  gap: 15px;
`;

export const StyledCounter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: green;
  font-size: 45px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
`;

export const StyledTeamName = styled.div`
  width: 200px;
  height: 30px;
  position: absolute;
  transform: rotate(60deg);
  transform-origin: 20% 0;
  text-align: center;
  color: black;
  font-size: 18px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  top: -20px;
  left: 50px;
`;

export const StyledPlusButton = styled.button`
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 70px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  background-color: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
`;
