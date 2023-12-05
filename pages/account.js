import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";

const Account = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p>you are logged in with {session.user.email}</p>
        <button
          style={{
            fontFamily: "Futura",
            padding: "8px",
            cursor: "pointer",
            borderRadius: "30px",
            border: "none",
          }}
          onClick={() => signOut()}
        >
          SIGN OUT
        </button>
        <span
          style={{
            padding: "5px",
            backgroundColor: "green",
            borderRadius: "30px",
          }}
        >
          <Link href="/editprofile">EDIT PROFILE</Link>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <p>you are not signed in.</p>
      </div>
    );
  }
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return { props: { session } };
};
export default Account;
