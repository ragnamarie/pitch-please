export default function Profile({ user }) {
  console.log(user);

  // Check if user array exists and has at least one item
  if (!user || user.length === 0) {
    return <div>User not found</div>;
  }

  // Destructure the first (and presumably only) object in the array
  const { userName, email, name } = user[0];

  return (
    <div>
      <p>club:</p>
      <p>name: {name}</p>
      <p>username: {userName}</p>
      <p>email: {email}</p>
      <p>phone number:</p>
    </div>
  );
}
