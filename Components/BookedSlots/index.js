export default function BookedSlots({ bookedTimeSlots }) {
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
