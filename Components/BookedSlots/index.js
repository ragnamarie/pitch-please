import React from "react";
import Link from "next/link";

export default function BookedSlots({ availableTimeSlots, teamSlug }) {
  const bookedTimeSlots = availableTimeSlots.filter(
    (slot) => !slot.isAvailable && slot.teamSlug === teamSlug
  );

  return (
    <ul>
      {bookedTimeSlots.map((bookedTimeSlot) => (
        <li key={bookedTimeSlot.id}>
          <p>
            <Link href={`/overview/${bookedTimeSlot.location}`}>
              {bookedTimeSlot.location}
            </Link>
          </p>
          <p>{bookedTimeSlot.day}</p>
          <p>{bookedTimeSlot.time}</p>
        </li>
      ))}
    </ul>
  );
}
