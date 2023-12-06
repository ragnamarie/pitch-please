export default function ProfileForm({ user, onEditProfile }) {
  // Check if user array exists and has at least one item
  if (!user || user.length === 0) {
    return <div>User not found</div>;
  }

  // Destructure the first (and presumably only) object in the array
  const { club, manager } = user[0];

  return (
    <form onSubmit={onEditProfile}>
      <label htmlFor="club-input">Club</label>
      <input type="text" id="club-input" name="club" defaultValue={club} />
      <label htmlFor="manager-input">Manager</label>
      <input
        type="text"
        id="manager-input"
        name="manager"
        defaultValue={manager}
      />
      <button type="submit">UPDATE</button>
    </form>
  );
}
