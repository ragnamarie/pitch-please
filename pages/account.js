import { useSession, signOut, getSession } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p>welcome, {session.user.name}!</p>
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
      redirect: { destination: "/login" },
    };
  }

  return { props: { session } };
};
export default Account;
