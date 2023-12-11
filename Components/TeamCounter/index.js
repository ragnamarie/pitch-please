export default function TeamCounter({ availableTimeSlots, name, club }) {
  // Filter availableTimeSlots based on teamName
  const teamSlots = availableTimeSlots.filter(
    (slot) => slot.teamName === name && slot.clubName === club
  );

  return <p>{teamSlots.length}</p>;
}
