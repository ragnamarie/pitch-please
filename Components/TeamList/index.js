import Link from "next/link";
import useSWR from "swr";
import TeamForm from "../TeamForm";

export default function TeamList() {
  const { data, isLoading, mutate } = useSWR("/api/teams");

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
    const teamData = {
      name: formData.get("team"), // Set the key to 'name'
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
      <ul>
        {data.map((team) => (
          <li key={team._id}>
            <Link href={`/club/${team._id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
      <TeamForm onAddTeam={handleAddTeam} value={data.name} />
    </div>
  );
}
