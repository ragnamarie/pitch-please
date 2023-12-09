import {
  StyledReportButton,
  StyledReportForm,
  StyledTextBox,
  StyledTextArea,
} from "./StyledReportForm";

export default function ReportForm() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledReportForm>
        <StyledTextBox type="text" />
        <br />
        <StyledTextBox type="text" />
        <br />
        <StyledTextBox type="text" />
        <br />
        <StyledTextArea />
        <br />
        <StyledReportButton type="submit">SUBMIT</StyledReportButton>
      </StyledReportForm>
    </div>
  );
}
