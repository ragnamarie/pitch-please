import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Counter({ availableTimeSlots, userClubForCounter }) {
  const availableSlotsFilter = availableTimeSlots.filter(
    (availableTimeSlot) =>
      availableTimeSlot.isAvailable === true &&
      availableTimeSlot.clubName === userClubForCounter
  );

  const availableSlotsCount = availableSlotsFilter.length;

  console.log(availableSlotsFilter, availableSlotsCount, userClubForCounter);

  return <>available slots: {availableSlotsCount}</>;
}
