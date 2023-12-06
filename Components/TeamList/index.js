import Link from "next/link";
import useSWR from "swr";
import TeamForm from "../TeamForm";
import slugify from "slugify";
import TeamCounter from "../TeamCounter";
import { useSession } from "next-auth/react";

export default function TeamList({ availableTimeSlots }) {
  const { data: session } = useSession();

  const { data, isLoading, mutate } = useSWR(session ? "/api/teams" : null);

  if (isLoading) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data);

  async function handleAddTeam(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const teamName = formData.get("team");

    const teamData = {
      slug: slugify(teamName, { lower: true }), // Generate slug from team name
      name: teamName,
      club: "FSV Hansa 07 Kreuzberg", // needs to become dynamic at some point
    };

    const response = await fetch(`/api/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });

    if (response.ok) {
      mutate();
    }
    console.log(teamData);
  }

  return (
    <div>
      <h2>FSV Hansa 07 Kreuzberg</h2>
      <ul>
        {data.map((team) => (
          <li key={team._id}>
            <span>
              <Link href={`/club/${team.slug}`}>{team.name}</Link>
              <TeamCounter
                name={team.name}
                availableTimeSlots={availableTimeSlots}
              />
            </span>
          </li>
        ))}
      </ul>
      <TeamForm onAddTeam={handleAddTeam} />
    </div>
  );
}

// instead of Hansa it needs to display User, needs to be dynamic
