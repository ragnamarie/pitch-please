import { useState } from "react";
import BookedSlots from "../BookedSlots";

export default function AvailableSlots({
  availableTimeSlots,
  onSlotChange,
  teamSlug,
  teamName,
  clubName,
}) {
  const filteredAvailableTimeSlots = availableTimeSlots.filter(
    (slot) => slot.isAvailable
  );

  return (
    <ul>
      {filteredAvailableTimeSlots.map((availableTimeSlot) => (
        <li key={availableTimeSlot.id}>
          <span
            style={{
              padding: "4px",
              cursor: "pointer",
              backgroundColor: "green",
              borderRadius: "30px",
              border: "none",
            }}
            onClick={() =>
              onSlotChange(
                {
                  target: {
                    value: `${availableTimeSlot.locationName} - ${availableTimeSlot.day} - ${availableTimeSlot.time}`,
                  },
                },
                teamSlug,
                teamName,
                clubName
              )
            }
          >
            <b>{availableTimeSlot.locationName}</b> {availableTimeSlot.day},{" "}
            {availableTimeSlot.time}
          </span>
        </li>
      ))}
    </ul>
  );
}
