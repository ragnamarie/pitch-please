import React from "react";
import Link from "next/link";

export default function BookedSlots({ availableTimeSlots, teamSlug }) {
  const bookedTimeSlots = availableTimeSlots.filter(
    (slot) => !slot.isAvailable && slot.teamSlug === teamSlug
  );

  return (
    <div>
      {bookedTimeSlots.map((bookedTimeSlot) => (
        <span
          key={bookedTimeSlot.id}
          style={{
            margin: "20px",
            padding: "2px",
            cursor: "pointer",
            backgroundColor: "orange",
            borderRadius: "30px",
          }}
        >
          <span>
            <Link href={`/overview/${bookedTimeSlot.locationSlug}`}>
              {bookedTimeSlot.locationName}
            </Link>
          </span>{" "}
          <span>{bookedTimeSlot.day}</span> <span>{bookedTimeSlot.time}</span>
        </span>
      ))}
    </div>
  );
}
