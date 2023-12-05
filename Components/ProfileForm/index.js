export default function ProfileForm() {
  return (
    <form>
      <label htmlFor="team-input">club name</label>
      <input type="text" id="team-input" name="team" />
      <button type="submit">UPDATE</button>
    </form>
  );
}
