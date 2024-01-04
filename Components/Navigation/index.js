import Link from "next/link";
import Counter from "../Counter";
import { StyledTabWhite, StyledTabGreen } from "./StyledNavigation";
import { useState } from "react";

export default function Navigation({ availableSlotsCount }) {
  return (
    <ul>
      <li>
        <StyledTabWhite>
          <Link href="/club">my club</Link>
        </StyledTabWhite>
      </li>
      <li>
        <StyledTabWhite>
          <Link href="/pitches">pitches</Link>
        </StyledTabWhite>
      </li>
      <li>
        <StyledTabWhite>
          <Link href="/account">account</Link>
        </StyledTabWhite>
      </li>
      <li>
        <StyledTabGreen>
          <Counter availableSlotsCount={availableSlotsCount} />
        </StyledTabGreen>
      </li>
    </ul>
  );
}
