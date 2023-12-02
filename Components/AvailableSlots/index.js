import { useState } from "react";
import BookedSlots from "../BookedSlots";

export default function AvailableSlots({
  availableTimeSlots,
  onSlotChange,
  teamID,
  teamName,
}) {
  const filteredAvailableTimeSlots = availableTimeSlots.filter(
    (slot) => slot.isAvailable
  );

  console.log(teamID);
  return (
    <div>
      <select
        onChange={(e) => onSlotChange(e, teamID, teamName)}
        defaultValue=""
      >
        <option value="" disabled hidden>
          -- Select a slot --
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
