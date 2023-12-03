import Link from "next/link";

export default function PitchCalendar({ availableTimeSlots, locationName }) {
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
    .filter((slot) => slot.location === locationName)
    .forEach((slot) => {
      const time = slot.time;
      const day = slot.day.toLowerCase();
      const teamName = slot.teamName;
      if (tableData[time]) {
        tableData[time][day] = teamName;
      }
    });

  const tableRows = Object.entries(tableData).map(([time, rowData]) => ({
    time,
    ...rowData,
  }));

  return (
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
            {Object.values(tableData[time]).map((teamName, index) => {
              const teamSlug = availableTimeSlots.find(
                (slot) => slot.time === time && slot.teamName === teamName
              )?.teamSlug;

              return (
                <td key={index}>
                  {teamName && (
                    <Link href={`/club/${teamSlug}`}>{teamName}</Link>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Link not yet working, needs the _id from the database
