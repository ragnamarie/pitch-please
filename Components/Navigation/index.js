import Link from "next/link";
import Counter from "../Counter";

export default function Navigation({ availableTimeSlots }) {
  return (
    <ul>
      <li>
        <Link href="/club">my club</Link>
      </li>
      <li>
        <Link href="/pitches">pitches</Link>
      </li>
      <li>
        <Link href="/account">account</Link>
      </li>
      <span
        style={{
          padding: "5px",
          backgroundColor: "green",
          borderRadius: "30px",
        }}
      >
        <Counter availableTimeSlots={availableTimeSlots} />
      </span>
    </ul>
  );
}
