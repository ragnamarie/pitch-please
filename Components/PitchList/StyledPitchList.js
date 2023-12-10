import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;
  padding-top: 140px;
  padding-left: 30px;
`;

export const StyledPolygon = styled.svg`
  width: 88px;
`;

export const StyledPitchName = styled.div`
  width: 260px;
  height: 30px;
  position: absolute;
  transform: rotate(60deg);
  transform-origin: 20% 0;
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  top: -50px;
  left: 15px;
`;

export const ListWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 80px;
`;
