import Link from "next/link";
import {
  StyledList,
  StyledPolygon,
  StyledPitchName,
  ListWrapper,
} from "./StyledPitchList.js";

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
    <StyledList>
      {uniquePitches.map((uniquePitch) => (
        <li key={uniquePitch.name}>
          <div style={{ position: "relative" }}>
            <StyledPolygon
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="88"
              viewBox="0 0 51 44"
              fill="none"
            >
              <path
                id="Vector"
                d="M12.7491 44H38.2509L51 22.0018L38.2509 0H12.7491L0 22.0018L12.7491 44Z"
                fill="#FFFFFF"
              />
            </StyledPolygon>

            <StyledPitchName>
              <Link href={`/pitches/${uniquePitch.slug}`}>
                {uniquePitch.name}
              </Link>
            </StyledPitchName>
          </div>
        </li>
      ))}
    </StyledList>
  );
}
