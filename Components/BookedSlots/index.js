export default function BookedSlots({ bookedTimeSlots }) {
  if (!bookedTimeSlots) {
    return;
  }

  return (
    <ul>
      {bookedTimeSlots.map((bookedTimeSlot) => (
        <li key={bookedTimeSlot.id}>
          <p>{bookedTimeSlot.timeSlotId}</p>
        </li>
      ))}
    </ul>
  );
}
