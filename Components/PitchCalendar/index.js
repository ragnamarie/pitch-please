import Link from "next/link";
import { WhiteSlot, TinyReportButton } from "./StyledPitchCalendar";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function PitchCalendar({
  availableTimeSlots,
  locationName,
  locationSlug,
  onFormValues,
}) {
  const { data: session } = useSession();
  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR(session ? `/api/users/${session.user?.googleId}` : null);

  console.log(userData?.clubName);

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
          <th style={{ width: "15%" }}></th>
          {Object.keys(tableData["04:00 PM"]).map((day, index) => (
            <th
              style={{ color: "white", width: "17%", fontWeight: "500" }}
              key={index}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(tableData).map((time, index) => (
          <tr style={{ color: "white" }} key={index}>
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
                    <WhiteSlot>
                      {userData?.clubName === clubName ? (
                        <u>
                          <Link
                            style={{
                              color: "green",
                            }}
                            href={`/club/${teamSlug}`}
                          >
                            {teamName}
                          </Link>
                        </u>
                      ) : (
                        <span style={{ color: "green" }}>{teamName}</span>
                      )}
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
                    </WhiteSlot>
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
