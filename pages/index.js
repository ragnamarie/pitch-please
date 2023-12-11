import { signIn, getSession } from "next-auth/react";
import { Wrapper } from "../styledPages";

export default function HomePage() {
  return (
    <Wrapper>
      <h1>
        log in{" "}
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => signIn()}
        >
          <u>here</u>.
        </span>
      </h1>
    </Wrapper>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: { destination: "/club" },
    };
  }

  return { props: { session } };
};
