import Link from "next/link";
import { WhiteSlot, TinyReportButton } from "./StyledPitchCalendar";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function PitchCalendar({
  weekNumber,
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

  // Function to get the dates of the current week (Monday to Friday)
  function getDatesOfWeek(weekNumber) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Get the first day of the year
    const firstDayOfYear = new Date(currentYear, 0, 1);

    // Calculate the first Monday of the year
    const daysUntilFirstMonday = (8 - firstDayOfYear.getDay()) % 7;
    const firstMonday = new Date(currentYear, 0, 1 + daysUntilFirstMonday);

    // Calculate the start date of the specified week
    const startDate = new Date(firstMonday);
    startDate.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);

    const dates = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }

    return dates;
  }

  const currentWeekDates = getDatesOfWeek(weekNumber);

  // Create an object to hold the table data
  const tableData = {};

  // Initialize tableData with weekdays and dates for each time slot
  const timeSlots = ["04:00 PM", "05:30 PM", "07:00 PM", "08:30 PM"];
  timeSlots.forEach((time) => {
    tableData[time] = {};
    currentWeekDates.forEach((date) => {
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      tableData[time][day] = {
        date: formattedDate,
        teamName: "", // Initialize with an empty string
      };
    });
  });

  // Populate the tableData with available time slots
  availableTimeSlots
    .filter((slot) => slot.locationName === locationName)
    .forEach((slot) => {
      const time = slot.time;
      const day = slot.day;
      const teamName = slot.teamName;
      const clubName = slot.clubName;
      if (
        tableData[time] &&
        currentWeekDates.some(
          (date) =>
            date.toLocaleDateString("en-US", { weekday: "long" }) === day
        )
      ) {
        tableData[time][day].teamName = teamName;
      }
    });

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th style={{ width: "15%" }}></th>
          {currentWeekDates.map((date, index) => (
            <th
              style={{ color: "white", width: "17%", fontWeight: "500" }}
              key={index}
            >
              {date.toLocaleDateString("en-US", { weekday: "long" })}
              <br />
              {date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((time, rowIndex) => (
          <tr style={{ color: "white" }} key={rowIndex}>
            <td>{time}</td>
            {currentWeekDates.map((date, colIndex) => {
              const day = date.toLocaleDateString("en-US", { weekday: "long" });
              const teamData = tableData[time][day];
              const teamName = teamData.teamName;
              const formattedDate = teamData.date;
              const teamSlug = availableTimeSlots.find(
                (slot) => slot.time === time && slot.teamName === teamName
              )?.teamSlug;
              const clubName = availableTimeSlots.find(
                (slot) => slot.time === time && slot.teamName === teamName
              )?.clubName;

              return (
                <td key={colIndex}>
                  {teamName ? (
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
                            formattedDate,
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
                  ) : (
                    <span style={{ color: "green" }}>{formattedDate}</span>
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
