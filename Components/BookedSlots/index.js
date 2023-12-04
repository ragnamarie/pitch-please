import React from "react";
import Link from "next/link";

export default function BookedSlots({
  availableTimeSlots,
  teamSlug,
  onSlotRelease,
}) {
  const bookedTimeSlots = availableTimeSlots.filter(
    (slot) => !slot.isAvailable && slot.teamSlug === teamSlug
  );

  return (
    <ul>
      {bookedTimeSlots.map((bookedTimeSlot) => (
        <li key={bookedTimeSlot.id}>
          <span
            style={{
              padding: "4px",
              cursor: "pointer",
              backgroundColor: "orange",
              borderRadius: "30px",
            }}
          >
            <span>
              <Link href={`/overview/${bookedTimeSlot.locationSlug}`}>
                <b>{bookedTimeSlot.locationName}</b>
              </Link>
            </span>{" "}
            <span>
              {bookedTimeSlot.day}, {bookedTimeSlot.time}
            </span>
            <button
              style={{
                borderRadius: "50%",
                backgroundColor: "orange",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() =>
                onSlotRelease({
                  target: {
                    value: `${bookedTimeSlot.locationName} - ${bookedTimeSlot.day} - ${bookedTimeSlot.time}`,
                  },
                })
              }
            >
              ✖
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
