import { StyledAddButton, StyledForm, StyledTextBox } from "./StyledTeamForm";

export default function TeamForm({ onAddTeam, onButtonClick }) {
  return (
    <StyledForm onSubmit={onAddTeam}>
      <label htmlFor="team-input"></label>
      <StyledTextBox type="text" id="team-input" name="team" />
      <StyledAddButton type="submit">ADD NEW TEAM</StyledAddButton>
    </StyledForm>
  );
}
