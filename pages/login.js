import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
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
        <button
          style={{
            fontFamily: "Futura",
            padding: "8px",
            cursor: "pointer",
            borderRadius: "30px",
            border: "none",
          }}
          onClick={() => signIn()}
        >
          SIGN IN
        </button>
      </div>
    );
  }
};

export default Login;
