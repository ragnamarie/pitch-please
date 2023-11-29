export default function BookedSlots({ bookedTimeSlots }) {
  if (!bookedTimeSlots) {
    return;
  }

  return (
    <ul>
      {bookedTimeSlots.map((bookedTimeSlot) => (
        <li key={bookedTimeSlot.id}>
          <p>{bookedTimeSlot.time}</p>
          <p>{bookedTimeSlot.day}</p>
          <p>{bookedTimeSlot.location}</p>
        </li>
      ))}
    </ul>
  );
}
