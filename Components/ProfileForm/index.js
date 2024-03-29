import {
  StyledEditButton,
  StyledForm,
  StyledTextBox,
} from "./StyledProfileForm";

export default function ProfileForm({ user, onEditClub, onEditManager }) {
  // Check if user array exists and has at least one item
  if (!user || user.length === 0) {
    return <div>User not found</div>;
  }

  // Destructure the first (and presumably only) object in the array
  const { club, manager } = user;

  const isClubNameSet = user.clubName !== null;

  return (
    <>
      {onEditClub && (
        <StyledForm onSubmit={onEditClub}>
          <StyledTextBox
            type="text"
            id="club-input"
            name="club"
            defaultValue={isClubNameSet ? user.clubName : "Club"}
            disabled={isClubNameSet}
          />
          <StyledEditButton type="submit" disabled={isClubNameSet}>
            UPDATE
          </StyledEditButton>
        </StyledForm>
      )}

      {onEditManager && (
        <StyledForm onSubmit={onEditManager}>
          <StyledTextBox
            type="text"
            id="manager-input"
            name="manager"
            defaultValue={user.managerName || "Manager"}
          />
          <StyledEditButton type="submit">UPDATE</StyledEditButton>
        </StyledForm>
      )}
    </>
  );
}
