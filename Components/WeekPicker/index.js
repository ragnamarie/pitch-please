import { useState } from "react";
import PitchCalendar from "../PitchCalendar";
import {
  StyledSkipButton,
  WeekPickerBox,
  WhiteWeekNumber,
} from "./StyledWeekPicker";

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
      <WeekPickerBox>
        <StyledSkipButton onClick={goToPreviousWeek}>←</StyledSkipButton>
        <WhiteWeekNumber>Week {currentWeekNumber}</WhiteWeekNumber>
        <StyledSkipButton onClick={goToNextWeek}>→</StyledSkipButton>
      </WeekPickerBox>
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
