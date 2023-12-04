export default function Counter({ availableTimeSlots }) {
  const availableSlotsFilter = availableTimeSlots.filter(
    (availableTimeSlot) => availableTimeSlot.isAvailable === true
  );
  const availableSlotsCount = availableSlotsFilter.length;

  return <div>available slots: {availableSlotsCount}</div>;
}
