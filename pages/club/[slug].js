import TeamDetails from "@/Components/TeamDetails";

export default function TeamDetailsPage({
  onSlotChange,
  onSlotRelease,
  availableTimeSlots,
  onUserClub,
}) {
  return (
    <TeamDetails
      onSlotChange={onSlotChange}
      onSlotRelease={onSlotRelease}
      availableTimeSlots={availableTimeSlots}
      onUserClub={onUserClub}
    />
  );
}
