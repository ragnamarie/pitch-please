export default function TeamForm({ value, onAddTeam }) {
  return (
    <form onSubmit={onAddTeam}>
      <p>Add a new team:</p>
      <label htmlFor="team-input"></label>
      <input type="text" id="team-input" name="team" defaultValue={value} />
      <button type="submit">Submit</button>
    </form>
  );
}
