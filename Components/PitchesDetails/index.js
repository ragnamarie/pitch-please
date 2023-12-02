import Link from "next/link";
import { useRouter } from "next/router";
import Calendar from "react-calendar";
import { useTable } from "react-table";

export default function PitchesDetails({ availableTimeSlots }) {
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

  const router = useRouter();
  const { name } = router.query;
  console.log("id:" + name);

  // Find the pitch that matches the ID in the URL
  const matchedPitch = uniquePitches.find((pitch) => pitch.name === name);

  if (!matchedPitch) {
    // Handle the case where the pitch with the specified ID is not found
    return <p>Pitch not found</p>;
  }

  const filteredSlots = availableTimeSlots.filter(
    (slot) => slot.location === name && !slot.isAvailable
  );

  const scheduleData = filteredSlots.map((slot) => ({
    time: slot.time,
    day: slot.day,
    teamID: slot.teamID,
  }));

  console.log(filteredSlots);

  // const scheduleData = [
  //   {
  //     time: "16:00 PM",
  //     monday: "Team A",
  //     tuesday: "Team B",
  //     wednesday: "Team C",
  //     thursday: "Team D",
  //     friday: "Team E",
  //   },
  //   {
  //     time: "17:30 PM",
  //     monday: "Team F",
  //     tuesday: "Team G",
  //     wednesday: "Team H",
  //     thursday: "Team I",
  //     friday: "Team J",
  //   },
  //   {
  //     time: "19:00 PM",
  //     monday: "Team K",
  //     tuesday: "Team L",
  //     wednesday: "Team M",
  //     thursday: "Team N",
  //     friday: "Team O",
  //   },
  //   {
  //     time: "20:30 PM",
  //     monday: "Team P",
  //     tuesday: "Team Q",
  //     wednesday: "Team R",
  //     thursday: "Team S",
  //     friday: "Team T",
  //   },
  //   // Add more rows as needed
  // ];

  return (
    <div>
      <Link href="/overview">← Back to List</Link>

      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              <td>{row.monday}</td>
              <td>{row.tuesday}</td>
              <td>{row.wednesday}</td>
              <td>{row.thursday}</td>
              <td>{row.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
