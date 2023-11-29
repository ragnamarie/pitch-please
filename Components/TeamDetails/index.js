import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookedSlots from "../BookedSlots";
import AvailableSlots from "../AvailableSlots";

export default function TeamDetails({ onSlotChange, availableTimeSlots }) {
  const router = useRouter();
  const { id } = router.query;

  const { data: teamData, isLoading: isLoadingTeamData } = useSWR(
    `/api/teams/${id}`
  );

  if (isLoadingTeamData) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!teamData) {
    return <p>teamdata not available</p>;
  }

  console.log(teamData);

  return (
    <>
      <Link href="/club">← Back to List</Link>
      <h1>{teamData.name}</h1>
      <AvailableSlots
        availableTimeSlots={availableTimeSlots}
        onSlotChange={onSlotChange}
      />
      <BookedSlots availableTimeSlots={availableTimeSlots}/>
    </>
  );
}
