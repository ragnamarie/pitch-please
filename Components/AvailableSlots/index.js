import { useState } from "react";
import BookedSlots from "../BookedSlots";

export default function AvailableSlots({ availableTimeSlots, onSlotChange }) {
  return (
    <div>
      <label>Select an available slot:</label>
      <select onChange={onSlotChange} value={availableTimeSlots?.time}>
        {availableTimeSlots.map((availableTimeSlot) => (
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
