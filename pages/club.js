import TeamList from "@/Components/TeamList";

export default function ClubPage({ teams }) {
  return (
    <main>
      <TeamList teams={teams} />
    </main>
  );
}

//need to render TeamForm here as well
