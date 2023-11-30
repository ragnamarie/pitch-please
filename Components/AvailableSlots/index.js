import { useState } from "react";
import BookedSlots from "../BookedSlots";

export default function AvailableSlots({
  availableTimeSlots,
  onSlotChange,
  teamID,
}) {
  const filteredAvailableTimeSlots = availableTimeSlots.filter(
    (slot) => slot.isAvailable
  );

  console.log(teamID);
  return (
    <div>
      <select onChange={(e) => onSlotChange(e, teamID)} defaultValue="">
        <option value="" disabled hidden>
          -- Select a slot --
        </option>
        {filteredAvailableTimeSlots.map((availableTimeSlot) => (
          <option
            key={availableTimeSlot.id}
            value={`${availableTimeSlot.time} - ${availableTimeSlot.day} - ${availableTimeSlot.location}`}
          >
            {availableTimeSlot.time}, {availableTimeSlot.day},{" "}
            {availableTimeSlot.location}
          </option>
        ))}
      </select>
    </div>
  );
}
