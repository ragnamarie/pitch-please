export default function TeamForm({ onAddTeam }) {
  return (
    <form onSubmit={onAddTeam}>
      <p>add a new team:</p>
      <label htmlFor="team-input"></label>
      <input type="text" id="team-input" name="team" />
      <button type="submit">ADD</button>
    </form>
  );
}
