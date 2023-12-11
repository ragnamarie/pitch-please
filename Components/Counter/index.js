import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Counter({ availableTimeSlots }) {
  const { data: session, status } = useSession();

  const { data, isLoading, error } = useSWR(
    session ? `api/users/${session.user?.googleId}` : null
  );

  const userClub = data?.clubName; // Ensure data is available before accessing its properties

  const availableSlotsFilter = availableTimeSlots.filter(
    (availableTimeSlot) =>
      availableTimeSlot.isAvailable === true &&
      availableTimeSlot.clubName === userClub
  );
  const availableSlotsCount = availableSlotsFilter.length;

  return <>available slots: {availableSlotsCount}</>;
}
