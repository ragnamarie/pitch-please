export default function TeamCounter({ availableTimeSlots, name }) {
  // Filter availableTimeSlots based on teamName
  const teamSlots = availableTimeSlots.filter((slot) => slot.teamName === name);

  return <p>{`booked slots: ${teamSlots.length}`}</p>;
}
