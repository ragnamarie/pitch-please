import { useState } from "react";
import BookedSlots from "../BookedSlots";

export default function AvailableSlots({
  availableTimeSlots,
  clubNameSlots,
  onSlotChange,
  teamSlug,
  teamName,
  clubName,
  onUserClub,
}) {
  const filteredAvailableTimeSlots = clubNameSlots.filter(
    (slot) => slot.isAvailable
  );

  console.log(clubNameSlots);
  return (
    <ul>
      {filteredAvailableTimeSlots.map((clubNameSlot) => (
        <li key={clubNameSlot.id}>
          <span
            style={{
              padding: "4px",
              cursor: "pointer",
              backgroundColor: "green",
              borderRadius: "30px",
              border: "solid white",
              padding: "8px",
              color: "white",
            }}
            onClick={() => {
              // Call the first function
              onSlotChange(
                {
                  target: {
                    value: `${clubNameSlot.locationName} - ${clubNameSlot.day} - ${clubNameSlot.time}`,
                  },
                },
                teamSlug,
                teamName,
                clubName
              );
              onUserClub(clubName);
            }}
          >
            <b>{clubNameSlot.locationName}</b> {clubNameSlot.day},{" "}
            {clubNameSlot.time}
          </span>
        </li>
      ))}
    </ul>
  );
}
