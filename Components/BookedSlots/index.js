import React from "react";

export default function BookedSlots({ availableTimeSlots, teamID }) {
  const bookedTimeSlots = availableTimeSlots.filter(
    (slot) => !slot.isAvailable && slot.teamID === teamID
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
