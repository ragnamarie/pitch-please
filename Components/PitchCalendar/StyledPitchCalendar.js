import styled from "styled-components";

export const WhiteSlot = styled.span`
  position: relative;
  padding: 12px;
  background-color: white;
  border-radius: 30px;
  border: none;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: green;
  font-weight: 700;
`;

export const ReportButton = styled.button`
  position: relative;
  padding: 12px;
  cursor: pointer;
  background-color: orange;
  border-radius: 30px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TinyReportButton = styled.span`
  position: relative;
  color: white;
  background-color: black;
  font-size: 8px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  border: none;
  border-radius: 30px;
  width: 45px;
  padding: 1px;
  height: 12px;
  flex-direction: column;
  align-items: center;
  display: flex;
`;
