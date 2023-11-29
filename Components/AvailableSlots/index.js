import { useState } from "react";

export default function AvailableSlots({ availableTimeSlots }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotChange = (event) => {
    const selectedValue = event.target.value;
    // Find the selected slot based on the value
    const selectedSlot = availableTimeSlots.find(
      (slot) =>
        `${slot.time} - ${slot.day} - ${slot.location}` === selectedValue
    );

    // Update the available property to false
    if (selectedSlot) {
      selectedSlot.available = false;
      setSelectedSlot(selectedSlot);
    }

    console.log(selectedSlot);
  };

  return (
    <div>
      <label>Select an available slot:</label>
      <select onChange={handleSlotChange} value={selectedSlot?.time}>
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
