import React from "react";
import Navigation from "../Navigation";

export default function Layout({ children, availableTimeSlots }) {
  return (
    <body>
      <header>
        <h1>PITCH, PLEASE!</h1>
        <Navigation availableTimeSlots={availableTimeSlots} />
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>PITCH, PLEASE!&copy;</small>
        </p>
      </footer>
    </body>
  );
}
