import { signIn, getSession } from "next-auth/react";

export default function HomePage() {
  return (
    <div>
      <h1>
        please, log in{" "}
        <span onClick={() => signIn()}>
          <u>here</u>.
        </span>
      </h1>
    </div>
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
