import React from "react";
import Link from "next/link";

export default function BookedSlots({
  availableTimeSlots,
  clubNameSlots,
  teamSlug,
  clubName,
  onSlotRelease,
  onAvailableSlotsCountChange,
}) {
  const bookedTimeSlots = clubNameSlots.filter(
    (slot) => !slot.isAvailable && slot.teamSlug === teamSlug
  );

  // this is for slot count
  const filteredAvailableTimeSlots = clubNameSlots.filter(
    (slot) => slot.isAvailable
  );

  const availableSlotsCount = filteredAvailableTimeSlots.length;
  // this is for slot count

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
                // Call the onSlotRelease function
                onSlotRelease(
                  {
                    target: {
                      value: `${bookedTimeSlot.locationName} - ${bookedTimeSlot.day} - ${bookedTimeSlot.time}`,
                    },
                  },
                  clubName
                );

                // Call the onAvailableSlotsCountChange function
                onAvailableSlotsCountChange(availableSlotsCount);
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
