import { useSession, signOut } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p>You are not signed in</p>
    </div>
  );
};

export default Account;
