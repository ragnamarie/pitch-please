import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Counter({ availableTimeSlots }) {
  const { data: session, status } = useSession();

  const { data, isLoading, error } = useSWR(
    session ? `api/users/${session.user?.googleId}` : null
  );

  const userClub = data?.[0]?.clubName; // Ensure data is available before accessing its properties

  const availableSlotsFilter = availableTimeSlots.filter(
    (availableTimeSlot) =>
      availableTimeSlot.isAvailable === true &&
      availableTimeSlot.clubName === userClub
  );
  const availableSlotsCount = availableSlotsFilter.length;

  return (
    <div
      style={{
        color: "white",
      }}
    >
      available slots: {availableSlotsCount}
    </div>
  );
}
