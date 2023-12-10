import { StyledList } from "./StyledProfile";

export default function Profile({ user }) {
  console.log(user);

  // Check if user array exists and has at least one item
  if (!user || user.length === 0) {
    return <div>User not found</div>;
  }

  // Destructure the first (and presumably only) object in the array
  const { userName, email, managerName, clubName } = user[0];

  return (
    <StyledList>
      <li>Club: {clubName}</li>
      <li>Manager: {managerName}</li>
      <li>Username: {userName}</li>
      <li>E-Mail: {email}</li>
    </StyledList>
  );
}
