import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>
        please, log in <Link href="/login">here.</Link>
      </h1>
    </div>
  );
}
