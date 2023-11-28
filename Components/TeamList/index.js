export default function TeamList({ teams }) {
  return (
    <ul>
      {teams.map((team) => (
        <li key={team.id}>
          <p>{team.name}</p>
        </li>
      ))}
    </ul>
  );
}
