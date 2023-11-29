import React from "react";

export default function BookedSlots({ availableTimeSlots }) {
  const bookedTimeSlots = availableTimeSlots.filter(
    (slot) => !slot.isAvailable
  );

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
