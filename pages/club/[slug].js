import TeamDetails from "@/Components/TeamDetails";

export default function TeamDetailsPage({ onSlotChange, availableTimeSlots }) {
  return (
    <TeamDetails
      onSlotChange={onSlotChange}
      availableTimeSlots={availableTimeSlots}
    />
  );
}
