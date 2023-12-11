import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import useSWR from "swr";
import Profile from "@/Components/Profile";
import {
  ButtonWrapper,
  Wrapper,
  SignInAndOutButton,
  EditProfileButton,
} from "../styledPages";

export default function Account() {
  const { data: session, status } = useSession();

  const { data, isLoading, error } = useSWR(
    session ? `api/users/${session.user?.googleId}` : null
  );

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (status === "authenticated") {
    return (
      <Wrapper>
        <ButtonWrapper>
          <h2>Hey there, {data?.clubName}!</h2>
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
      </Wrapper>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
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
