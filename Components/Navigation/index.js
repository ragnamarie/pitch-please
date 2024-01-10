import Link from "next/link";
import Counter from "../Counter";
import { StyledTabWhite, StyledTabGreen } from "./StyledNavigation";
import { useRouter } from "next/router";

export default function Navigation({ availableTimeSlots }) {
  const router = useRouter();
  const isPageActive = (href) => router.pathname.startsWith(href);

  return (
    <ul>
      <li>
        <StyledTabWhite isActive={isPageActive("/club")}>
          <Link href="/club">my club</Link>
        </StyledTabWhite>
      </li>
      <li>
        <StyledTabWhite isActive={isPageActive("/pitches")}>
          <Link href="/pitches">pitches</Link>
        </StyledTabWhite>
      </li>
      <li>
        <StyledTabWhite isActive={isPageActive("/account")}>
          <Link href="/account">account</Link>
        </StyledTabWhite>
      </li>
      <li>
        <StyledTabGreen>
          <Counter availableTimeSlots={availableTimeSlots} />
        </StyledTabGreen>
      </li>
    </ul>
  );
}
