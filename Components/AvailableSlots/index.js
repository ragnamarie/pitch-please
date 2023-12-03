import { useState } from "react";
import BookedSlots from "../BookedSlots";

export default function AvailableSlots({
  availableTimeSlots,
  onSlotChange,
  teamSlug,
  teamName,
}) {
  const filteredAvailableTimeSlots = availableTimeSlots.filter(
    (slot) => slot.isAvailable
  );

  return (
    <div>
      {filteredAvailableTimeSlots.map((availableTimeSlot) => (
        <span
          key={availableTimeSlot.id}
          style={{
            margin: "20px",
            padding: "2px",
            cursor: "pointer",
            backgroundColor: "green",
            borderRadius: "30px",
          }}
          onClick={() =>
            onSlotChange(
              {
                target: {
                  value: `${availableTimeSlot.locationName} - ${availableTimeSlot.day} - ${availableTimeSlot.time}`,
                },
              },
              teamSlug,
              teamName
            )
          }
        >
          {availableTimeSlot.locationName}, {availableTimeSlot.day},{" "}
          {availableTimeSlot.time}
        </span>
      ))}
    </div>
  );
}
