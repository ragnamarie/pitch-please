import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookedSlots from "../BookedSlots";
import AvailableSlots from "../AvailableSlots";

export default function TeamDetails({
  onSlotChange,
  onSlotRelease,
  availableTimeSlots,
}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const { data: teamData, isLoading: isLoadingTeamData } = useSWR(
    `/api/teams/${slug}`
  );

  async function handleDeleteTeam() {
    const response = await fetch(`/api/teams/${slug}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/club");
  }

  if (isLoadingTeamData) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!teamData) {
    return <p>teamdata not available</p>;
  }

  console.log(teamData);

  console.log(teamData.name);

  return (
    <>
      <Link href="/club">← Back to List</Link>
      <h2>{teamData.name}</h2>
      <button onClick={handleDeleteTeam}>
        <span>DELETE TEAM</span>
      </button>
      <AvailableSlots
        availableTimeSlots={availableTimeSlots}
        onSlotChange={onSlotChange}
        teamSlug={teamData.slug}
        teamName={teamData.name}
      />
      <BookedSlots
        availableTimeSlots={availableTimeSlots}
        onSlotRelease={onSlotRelease}
        teamSlug={teamData.slug}
      />
    </>
  );
}
