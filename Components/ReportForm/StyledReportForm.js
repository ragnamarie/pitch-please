import styled from "styled-components";

export const StyledReportButton = styled.button`
  position: relative;
  color: white;
  background-color: black;
  font-size: 14px;
  font-family: Futura;
  font-weight: 700;
  word-wrap: break-word;
  border: none;
  border-radius: 30px;
  width: 150px;
  padding: 10px;
`;

export const StyledReportForm = styled.form`
  display: grid;
  flex-direction: column;
  margin: 15px;
`;

export const StyledTextBox = styled.input`
  position: relative;
  font-size: 14px;
  font-family: Helvetica;
  font-weight: 700;
  width: 20%;
  border: solid black;
  border-radius: 30px;
  padding: 10px;
  word-wrap: break-word;
`;

export const StyledTextArea = styled.textarea`
  position: relative;
  padding: 15px;
  font-size: 14px;
  font-family: Helvetica;
  font-weight: 700;
  width: 50%;
  border: solid black;
  border-radius: 30px;
  height: 200px;
  word-wrap: break-word;
`;
