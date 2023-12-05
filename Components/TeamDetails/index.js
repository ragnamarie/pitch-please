import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookedSlots from "../BookedSlots";
import AvailableSlots from "../AvailableSlots";
import { useSession } from "next-auth/react";

export default function TeamDetails({
  onSlotChange,
  onSlotRelease,
  availableTimeSlots,
}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const { data: session } = useSession();
  const { data: teamData, isLoading: isLoadingTeamData } = useSWR(
    session ? `/api/teams/${slug}` : null
  );

  async function handleDeleteTeam() {
    const isTeamUsed = availableTimeSlots.some(
      (slot) => slot.teamSlug === slug
    );

    if (isTeamUsed) {
      // If deletion is not allowed, do nothing
      return;
    }
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
      <button
        style={{
          fontFamily: "Futura",
          padding: "8px",
          cursor: "pointer",
          borderRadius: "30px",
          border: "none",
        }}
        onClick={handleDeleteTeam}
      >
        DELETE TEAM
      </button>
      <div className="slots">
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
      </div>
    </>
  );
}
