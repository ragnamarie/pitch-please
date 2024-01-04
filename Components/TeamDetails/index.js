import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookedSlots from "../BookedSlots";
import AvailableSlots from "../AvailableSlots";
import { useSession } from "next-auth/react";
import {
  StyledDeleteButton,
  SlotWrapper,
  DeleteWrapper,
} from "./StyledTeamDetails";
import { WrapperTwo } from "@/styledPages";
import DeleteBlocker from "../DeleteBlocker";
import { useState } from "react";

export default function TeamDetails({
  onSlotChange,
  onSlotRelease,
  availableTimeSlots,
  onAvailableSlotsCountChange,
}) {
  const router = useRouter();
  const { slug } = router.query;

  console.log("slug" + slug);

  const [showDeleteBlocker, setShowDeleteBlocker] = useState(false);

  const { data: session } = useSession();
  console.log("Session Data:", session);

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

  console.log("teamData" + teamData);
  console.log("userData" + userData.clubName);
  console.log("session" + session.user?.googleId);

  const userClub = userData.clubName;

  console.log("userClub" + userClub);

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
      setShowDeleteBlocker(true);
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
  console.log(teamData.slug);
  console.log("teamDAtacalub" + teamData.club);

  return (
    <WrapperTwo>
      <Link href="/club">← Back to List</Link>
      <h2>{teamData.name}</h2>
      <SlotWrapper>
        <DeleteWrapper>
          <StyledDeleteButton onClick={handleDeleteTeam}>
            DELETE TEAM
          </StyledDeleteButton>
          {showDeleteBlocker && <DeleteBlocker />}
        </DeleteWrapper>
        <AvailableSlots
          availableTimeSlots={availableTimeSlots}
          clubNameSlots={clubNameSlots}
          onSlotChange={onSlotChange}
          teamSlug={teamData.slug}
          teamName={teamData.name}
          clubName={userClub}
          onAvailableSlotsCountChange={onAvailableSlotsCountChange}
        />
        <BookedSlots
          availableTimeSlots={availableTimeSlots}
          onSlotRelease={onSlotRelease}
          teamSlug={teamData.slug}
          clubName={userClub}
          clubNameSlots={clubNameSlots}
          onAvailableSlotsCountChange={onAvailableSlotsCountChange}
        />
      </SlotWrapper>
    </WrapperTwo>
  );
}
