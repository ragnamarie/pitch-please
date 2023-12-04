import TeamDetails from "@/Components/TeamDetails";

export default function TeamDetailsPage({ onSlotChange, onSlotRelease, availableTimeSlots }) {
  return (
    <TeamDetails
      onSlotChange={onSlotChange}
      onSlotRelease={onSlotRelease}
      availableTimeSlots={availableTimeSlots}
    />
  );
}
