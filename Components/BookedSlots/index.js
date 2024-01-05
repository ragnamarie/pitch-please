import React from "react";
import Link from "next/link";

export default function BookedSlots({
  availableTimeSlots,
  clubNameSlots,
  teamSlug,
  clubName,
  onSlotRelease,
  onUserClub,
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
              backgroundColor: "white",
              color: "green",
              borderRadius: "30px",
              border: "none",
              padding: "8px",
            }}
          >
            <span>
              <u>
                <Link
                  style={{ color: "green" }}
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
                backgroundColor: "white",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                onSlotRelease(
                  {
                    target: {
                      value: `${bookedTimeSlot.locationName} - ${bookedTimeSlot.day} - ${bookedTimeSlot.time}`,
                    },
                  },
                  clubName
                );
                onUserClub(clubName);
              }}
            >
              ✖
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
