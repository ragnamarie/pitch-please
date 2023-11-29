import { useState } from "react";
import BookedSlots from "../BookedSlots";

export default function AvailableSlots({ availableTimeSlots }) {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotChange = (event) => {
    const selectedValue = event.target.value;
    // Find the selected slot based on the value
    const selectedSlot = availableTimeSlots.find(
      (slot) =>
        `${slot.time} - ${slot.day} - ${slot.location}` === selectedValue
    );

    // Update the available property to false
    if (selectedSlot) {
      // Check if the slot is not already selected
      if (!selectedSlots.some((slot) => slot.id === selectedSlot.id)) {
        setSelectedSlots([...selectedSlots, selectedSlot]);
      }
    }
  };

  return (
    <div>
      <label>Select an available slot:</label>
      <select onChange={handleSlotChange} value={selectedSlots[0]?.time}>
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
      <BookedSlots bookedTimeSlots={selectedSlots} />
    </div>
  );
}
