import PitchDetails from "@/Components/PitchDetails";

export default function PitchDetailsPage({ availableTimeSlots, onFormValues }) {
  return (
    <PitchDetails
      availableTimeSlots={availableTimeSlots}
      onFormValues={onFormValues}
    />
  );
}
