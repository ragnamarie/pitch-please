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
      <select
        onChange={(e) => onSlotChange(e, teamSlug, teamName)}
        defaultValue=""
      >
        <option value="" disabled hidden>
          SELECT A SLOT
        </option>
        {filteredAvailableTimeSlots.map((availableTimeSlot) => (
          <option
            key={availableTimeSlot.id}
            value={`${availableTimeSlot.location} - ${availableTimeSlot.day} - ${availableTimeSlot.time}`}
          >
            {availableTimeSlot.location}, {availableTimeSlot.day},{" "}
            {availableTimeSlot.time}
          </option>
        ))}
      </select>
    </div>
  );
}
