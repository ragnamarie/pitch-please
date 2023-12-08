import {
  StyledReportButton,
  StyledForm,
  StyledTextBox,
} from "./StyledReportForm";

export default function ReportForm({ onAddTeam }) {
  return (
    <StyledForm onSubmit={onAddTeam}>
      <label htmlFor="team-input"></label>
      <StyledTextBox type="text" id="team-input" name="team" />
      <StyledReportButton type="submit">SUBMIT</StyledReportButton>
    </StyledForm>
  );
}
