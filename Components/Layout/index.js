import React from "react";
import Navigation from "../Navigation";
import { useSession } from "next-auth/react";

export default function Layout({ children, availableSlotsCount }) {
  const { data: session } = useSession();

  return (
    <>
      <header>
        <h1>PITCH, PLEASE!</h1>
        {session && <Navigation availableSlotsCount={availableSlotsCount} />}
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>PITCH, PLEASE!&copy;</small>
        </p>
      </footer>
    </>
  );
}
