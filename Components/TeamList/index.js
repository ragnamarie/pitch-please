import Link from "next/link";
import useSWR from "swr";

export default function TeamList() {
  const { data, isLoading } = useSWR("/api/teams");

  if (isLoading) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data);

  return (
    <ul>
      {data.map((team) => (
        <li key={team.id}>
          <Link href={`/club/${team.id}`}>{team.name}</Link>
        </li>
      ))}
    </ul>
  );
}
