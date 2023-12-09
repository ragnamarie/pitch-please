import {
  StyledReportButton,
  StyledReportForm,
  StyledTextBox,
  StyledTextArea,
} from "./StyledReportForm";

export default function ReportForm({ formValues }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledReportForm>
        <StyledTextBox
          type="text"
          id="club-input"
          name="club"
          defaultValue={formValues.reportedClub}
        />
        <br />
        <StyledTextBox
          type="text"
          id="team-input"
          name="team"
          defaultValue={formValues.reportedTeam}
        />
        <br />
        <StyledTextBox
          type="text"
          id="pitch-input"
          name="pitch"
          defaultValue={formValues.reportedPitch}
        />
        <br />
        <StyledTextBox
          type="text"
          id="time-input"
          name="time"
          defaultValue={formValues.reportedTime}
        />
        <br />
        <StyledTextBox
          type="text"
          id="date-input"
          name="date"
          defaultValue={formValues.reportedDay}
        />
        <br />
        <StyledTextArea placeholder="What do you want to report?" />
        <br />
        <StyledReportButton type="submit">SUBMIT</StyledReportButton>
      </StyledReportForm>
    </div>
  );
}
