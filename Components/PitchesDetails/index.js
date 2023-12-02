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

  // const scheduleData = filteredSlots.map((slot) => ({
  //   time: slot.time,
  //   day: slot.day,
  //   teamID: slot.teamID,
  // }));

  // console.log(filteredSlots);

  const tableData = {
    "04:00 PM": {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
    },
    "05:30 PM": {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
    },
    "07:00 PM": {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
    },
    "08:30 PM": {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
    },
  };

  availableTimeSlots
    .filter((slot) => slot.location === name)
    .forEach((slot) => {
      const time = slot.time;
      const day = slot.day.toLowerCase();
      const teamID = slot.teamID;
      if (tableData[time]) {
        tableData[time][day] = teamID;
      }
    });

  const tableRows = Object.entries(tableData).map(([time, rowData]) => ({
    time,
    ...rowData,
  }));

  return (
    <div>
      <Link href="/overview">← Back to List</Link>

      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            {Object.keys(tableData["04:00 PM"]).map((day, index) => (
              <th key={index}>{day.charAt(0).toUpperCase() + day.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(tableData).map((time, index) => (
            <tr key={index}>
              <td>{time}</td>
              {Object.values(tableData[time]).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
