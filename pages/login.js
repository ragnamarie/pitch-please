import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>SIGN OUT</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>SIGN IN</button>
      </div>
    );
  }
};

export default Login;
