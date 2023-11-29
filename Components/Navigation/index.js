import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/club">my club</Link>
      </li>
      <li>
        <Link href="/overview">overview</Link>
      </li>
      <li>
        <Link href="/settings">settings</Link>
      </li>
    </ul>
  );
}
