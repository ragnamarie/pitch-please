import React from "react";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>pitch, please!</h1>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>pitch, please!&copy;</small>
        </p>
      </footer>
    </div>
  );
}
