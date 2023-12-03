export default function TeamForm({ onAddTeam }) {
  return (
    <form onSubmit={onAddTeam}>
      <p>Add a new team:</p>
      <label htmlFor="team-input"></label>
      <input type="text" id="team-input" name="team" />
      <button type="submit">Submit</button>
    </form>
  );
}
