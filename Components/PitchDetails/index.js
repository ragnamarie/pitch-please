import Link from "next/link";
import { useRouter } from "next/router";
import PitchCalendar from "../PitchCalendar";
import { WrapperTwo } from "@/Components/styledPages";

export default function PitchDetails({ availableTimeSlots, onFormValues }) {
  const uniquePitches = [];
  const seenPitches = {}; // To keep track of seen locations

  availableTimeSlots.forEach((availableTimeSlot) => {
    const locationName = availableTimeSlot.locationName;
    const locationSlug = availableTimeSlot.locationSlug;

    // Check if the location is not seen before
    if (!seenPitches[locationName]) {
      seenPitches[locationName] = true;

      // Use the same UID logic to generate IDs
      uniquePitches.push({ name: locationName, slug: locationSlug });
    }
  });

  const router = useRouter();
  const { slug } = router.query;

  // Find the pitch that matches the ID in the URL
  const matchedPitch = uniquePitches.find((pitch) => pitch.slug === slug);

  if (!matchedPitch) {
    // Handle the case where the pitch with the specified ID is not found
    return <p>Pitch not found</p>;
  }

  return (
    <WrapperTwo>
      <Link href="/pitches">← Back to List</Link>

      <h2>{matchedPitch.name}</h2>
      <PitchCalendar
        availableTimeSlots={availableTimeSlots}
        locationName={matchedPitch.name}
        locationSlug={matchedPitch.slug}
        onFormValues={onFormValues}
      />
    </WrapperTwo>
  );
}
