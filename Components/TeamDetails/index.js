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
  const {
    data: userData,
    isLoading: isLoadingUserData,
    error: userError,
  } = useSWR(session ? `/api/users/${session.user?.googleId}` : null);

  if (isLoadingTeamData || isLoadingUserData) {
    return <h1>Loading...</h1>;
  }

  if (!teamData || userError) {
    return <p>Error loading data...</p>;
  }

  console.log(teamData);
  console.log(userData);

  const { clubName } = userData[0];
  const userClub = clubName;

  // Use the filter method to create a new array with objects that match the condition
  const clubNameSlots = availableTimeSlots.filter(
    (slot) => slot.clubName === userClub
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
  console.log(teamData.club);

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
          clubNameSlots={clubNameSlots}
          onSlotChange={onSlotChange}
          teamSlug={teamData.slug}
          teamName={teamData.name}
          clubName={teamData.club}
        />
        <BookedSlots
          availableTimeSlots={availableTimeSlots}
          onSlotRelease={onSlotRelease}
          teamSlug={teamData.slug}
          clubName={teamData.club}
          clubNameSlots={clubNameSlots}
        />
      </div>
    </>
  );
}
