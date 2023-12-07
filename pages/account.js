import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import useSWR from "swr";
import Profile from "@/Components/Profile";
import {
  ButtonWrapper,
  SignInAndOutButton,
  EditProfileButton,
} from "./styledPages";

export default function Account() {
  const { data: session, status } = useSession();

  const { data, isLoading, error } = useSWR(
    session ? `api/users/${session.user?.googleId}` : null
  );

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (status === "authenticated") {
    return (
      <div>
        <ButtonWrapper>
          <h2>hey there, {session.user.clubName}!</h2>
          <SignInAndOutButton onClick={() => signOut()}>
            SIGN OUT
          </SignInAndOutButton>
          <EditProfileButton>
            <Link
              style={{
                color: "white",
              }}
              href="/editprofile"
            >
              EDIT PROFILE
            </Link>
          </EditProfileButton>
        </ButtonWrapper>

        <Profile user={data} />
      </div>
    );
  } else {
    return (
      <div>
        <p>you are not signed in.</p>
        <SignInAndOutButton onClick={() => signIn()}>
          SIGN IN
        </SignInAndOutButton>
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return { props: { session } };
};

// keeping this for now just to be safe

//   if (status === "authenticated") {
//     return (
//       <div>
//         <p>you are logged in with {session.user.email}</p>
//         <button
//           style={{
//             fontFamily: "Futura",
//             padding: "8px",
//             cursor: "pointer",
//             borderRadius: "30px",
//             border: "none",
//           }}
//           onClick={() => signOut()}
//         >
//           SIGN OUT
//         </button>
//         <span
//           style={{
//             padding: "5px",
//             backgroundColor: "green",
//             borderRadius: "30px",
//           }}
//         >
//           <Link href="/editprofile">EDIT PROFILE</Link>
//         </span>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <p>you are not signed in.</p>
//       </div>
//     );
//   }
// };
