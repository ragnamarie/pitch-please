import { StyledList } from "./StyledProfile";
import Link from "next/link";
import { EditButton } from "./StyledProfile";

export default function Profile({ user }) {
  console.log(user);

  // Check if user array exists and has at least one item
  if (!user || user.length === 0) {
    return <div>User not found</div>;
  }

  // Destructure the first (and presumably only) object in the array
  const { userName, email, managerName, clubName } = user;

  return (
    <StyledList>
      <li>
        Club: {clubName}{" "}
        <Link href="/editclub">
          <EditButton>
            <span style={{ color: "white" }}>EDIT</span>
          </EditButton>
        </Link>
      </li>
      <li>
        Manager: {managerName}{" "}
        <Link href="/editmanager">
          <EditButton>
            <span style={{ color: "white" }}>EDIT</span>
          </EditButton>
        </Link>
      </li>
      <li>Username: {userName}</li>
      <li>E-Mail: {email}</li>
    </StyledList>
  );
}
