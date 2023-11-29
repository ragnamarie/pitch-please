import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookedSlots from "../BookedSlots";
import AvailableSlots from "../AvailableSlots";

export default function TeamDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: teamData, isLoading: isLoadingTeamData } = useSWR(
    `/api/teams/${id}`
  );

  const { data: availableSlotsData, isLoading: isLoadingAvailableSlotsData } =
    useSWR(`/api/availableSlots`);

  if (isLoadingTeamData || isLoadingAvailableSlotsData) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!teamData || !availableSlotsData) {
    return <p>data not available</p>;
  }

  console.log(teamData);

  return (
    <>
      <Link href="/club">← Back to List</Link>
      <h1>{teamData.name}</h1>
      <BookedSlots bookedTimeSlots={availableSlotsData} />
      <AvailableSlots availableTimeSlots={availableSlotsData} />
    </>
  );
}
