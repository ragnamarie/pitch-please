import { useState } from "react";
import PitchCalendar from "../PitchCalendar";

export default function WeekPicker({
  availableTimeSlots,
  locationName,
  locationSlug,
  onFormValues,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentWeekNumber = getWeekNumber(currentDate);

  function getWeekNumber(date) {
    const today = date;
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  function goToPreviousWeek() {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(currentDate.getDate() - 7);
    setCurrentDate(previousWeek);
  }

  function goToNextWeek() {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeek);
  }

  return (
    <div>
      <p>
        <button onClick={goToPreviousWeek}>←</button>Current Week:{" "}
        {currentWeekNumber}
        <button onClick={goToNextWeek}>→</button>
      </p>
      <PitchCalendar
        weekNumber={currentWeekNumber}
        availableTimeSlots={availableTimeSlots}
        locationName={locationName}
        locationSlug={locationSlug}
        onFormValues={onFormValues}
      />
    </div>
  );
}
