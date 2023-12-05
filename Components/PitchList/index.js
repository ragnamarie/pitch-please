import Link from "next/link";
import { uid } from "uid";

export default function PitchList({ availableTimeSlots }) {
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

  console.log("Unique Pitches:", uniquePitches);

  return (
    <div>
      <ul>
        {uniquePitches.map((uniquePitch) => (
          <li key={uniquePitch.name}>
            <Link href={`/pitches/${uniquePitch.slug}`}>
              {uniquePitch.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
