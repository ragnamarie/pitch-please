import React from "react";
import Navigation from "../Navigation";
import { useSession } from "next-auth/react";

export default function Layout({ children, availableTimeSlots }) {
  const { data: session } = useSession();

  return (
    <>
      <header>
        <h1>PITCH, PLEASE!</h1>
        {session && <Navigation availableTimeSlots={availableTimeSlots} />}
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
