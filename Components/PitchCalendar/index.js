import Link from "next/link";
import { OrangeSlot, TinyReportButton } from "./StyledPitchCalendar";

export default function PitchCalendar({
  availableTimeSlots,
  locationName,
  locationSlug,
  onFormValues,
}) {
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
    .filter((slot) => slot.locationName === locationName)
    .forEach((slot) => {
      const time = slot.time;
      const day = slot.day.toLowerCase();
      const teamName = slot.teamName;
      const clubName = slot.clubName;
      if (tableData[time]) {
        tableData[time][day] = teamName;
      }
    });

  const tableRows = Object.entries(tableData).map(([time, rowData]) => ({
    time,
    ...rowData,
  }));

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th style={{ width: "10%" }}></th>
          {Object.keys(tableData["04:00 PM"]).map((day, index) => (
            <th style={{ width: "16%" }} key={index}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(tableData).map((time, index) => (
          <tr key={index}>
            <td>{time}</td>
            {Object.entries(tableData[time]).map(([day, teamName], index) => {
              const teamSlug = availableTimeSlots.find(
                (slot) => slot.time === time && slot.teamName === teamName
              )?.teamSlug;
              const clubName = availableTimeSlots.find(
                (slot) => slot.time === time && slot.teamName === teamName
              )?.clubName;

              return (
                <td key={index}>
                  {teamName && (
                    <OrangeSlot>
                      <u>
                        <Link
                          style={{ color: "black" }}
                          href={`/club/${teamSlug}`}
                        >
                          {teamName}
                        </Link>
                      </u>
                      <span>{clubName}</span>
                      <TinyReportButton
                        onClick={() =>
                          onFormValues(
                            teamName,
                            clubName,
                            time,
                            day,
                            locationName,
                            locationSlug
                          )
                        }
                      >
                        <Link
                          style={{
                            color: "white",
                          }}
                          href={`/report`}
                        >
                          REPORT
                        </Link>
                      </TinyReportButton>
                    </OrangeSlot>
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
