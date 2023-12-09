import React from "react";
import Link from "next/link";

export default function BookedSlots({
  availableTimeSlots,
  clubNameSlots,
  teamSlug,
  clubName,
  onSlotRelease,
}) {
  const bookedTimeSlots = clubNameSlots.filter(
    (slot) => !slot.isAvailable && slot.teamSlug === teamSlug
  );

  return (
    <ul>
      {bookedTimeSlots.map((bookedTimeSlot) => (
        <li key={bookedTimeSlot.id}>
          <span
            style={{
              padding: "4px",
              backgroundColor: "orange",
              borderRadius: "30px",
              border: "solid black",
              padding: "8px",
            }}
          >
            <span>
              <u>
                <Link
                  style={{ color: "black" }}
                  href={`/pitches/${bookedTimeSlot.locationSlug}`}
                >
                  <b>{bookedTimeSlot.locationName}</b>
                </Link>
              </u>
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
                onSlotRelease(
                  {
                    target: {
                      value: `${bookedTimeSlot.locationName} - ${bookedTimeSlot.day} - ${bookedTimeSlot.time}`,
                    },
                  },
                  clubName
                )
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
