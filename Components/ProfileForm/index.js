export default function ProfileForm() {
  return (
    <form>
      <label htmlFor="clubName">Club Name:</label>
      <input type="text" id="clubName" name="clubName" required />

      <label htmlFor="president">President:</label>
      <input type="text" id="president" name="president" required />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required />

      <label htmlFor="emailAddress">Email Address:</label>
      <input type="email" id="emailAddress" name="emailAddress" required />

      <label htmlFor="address">Address:</label>
      <textarea id="address" name="address" rows="4" required></textarea>

      <button type="submit">ADD</button>
    </form>
  );
}
