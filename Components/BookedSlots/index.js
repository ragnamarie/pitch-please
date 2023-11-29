import React from "react";

export default function BookedSlots({ bookedTimeSlots }) {
  if (!bookedTimeSlots || bookedTimeSlots.length === 0) {
    return "this place is already booked!"; // or you can return a message indicating no slots are booked
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
