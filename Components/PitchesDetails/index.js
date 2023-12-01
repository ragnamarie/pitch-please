import Link from "next/link";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function PitchesDetails({ availableTimeSlots }) {
  const uniquePitches = [];
  const seenPitches = {}; // To keep track of seen locations

  availableTimeSlots.forEach((availableTimeSlot) => {
    const location = availableTimeSlot.location;

    // Check if the location is not seen before
    if (!seenPitches[location]) {
      seenPitches[location] = true;

      // Use the same UID logic to generate IDs
      const id = uid();
      uniquePitches.push({ id, name: location });
    }
  });

  const router = useRouter();
  const { id } = router.query;

  // Find the pitch that matches the ID in the URL
  const matchedPitch = uniquePitches.find((pitch) => pitch.id === id);

  if (!matchedPitch) {
    // Handle the case where the pitch with the specified ID is not found
    return <p>Pitch not found</p>;
  }

  // Use the id directly
  return (
    <>
      <Link href="/overview">← Back to List</Link>
      <div>
        <h1>{id}</h1>
        {/* Render other details for the matched pitch if needed */}
      </div>
    </>
  );
}
