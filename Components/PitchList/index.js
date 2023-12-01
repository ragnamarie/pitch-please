import Link from "next/link";
import { uid } from "uid";

export default function PitchList({ availableTimeSlots }) {
  const uniquePitches = [];
  const seenPitches = {}; // To keep track of seen locations

  availableTimeSlots.forEach((availableTimeSlot) => {
    const location = availableTimeSlot.location;

    // Check if the location is not seen before
    if (!seenPitches[location]) {
      seenPitches[location] = true;

      // Use the same UID logic to generate IDs
      uniquePitches.push({ name: location });
    }
  });

  console.log("Unique Pitches:", uniquePitches);

  return (
    <div>
      <ul>
        {uniquePitches.map((uniquePitch) => (
          <li key={uniquePitch.name}>
            <Link href={`/overview/${uniquePitch.name}`}>
              {uniquePitch.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
