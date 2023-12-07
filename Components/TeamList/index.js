import Link from "next/link";
import useSWR from "swr";
import TeamForm from "../TeamForm";
import { useState } from "react";
import slugify from "slugify";
import TeamCounter from "../TeamCounter";
import { useSession } from "next-auth/react";
import {
  StyledList,
  StyledPolygon,
  StyledCounter,
  StyledTeamName,
  StyledPlusButton,
} from "./StyledTeamList.js";

export default function TeamList({ availableTimeSlots }) {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const { data: session } = useSession();

  const {
    data: teamData,
    isLoading: teamLoading,
    mutate: mutateTeams,
  } = useSWR(session ? "/api/teams" : null);
  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR(session ? `/api/users/${session.user?.googleId}` : null);

  if (teamLoading || userLoading) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!teamData || userError) {
    return <p>Error loading data...</p>;
  }

  console.log(teamData);
  console.log(userData);

  const userClub = session.user.clubName;
  const userClubData = teamData.filter((team) => team.club === userClub);

  function handleButtonClick() {
    // Toggle the value of isButtonClicked
    setButtonClicked((prevValue) => !prevValue);
  }

  async function handleAddTeam(event) {
    console.log("Button clicked");
    event.preventDefault();

    const formData = new FormData(event.target);
    const teamName = formData.get("team");

    const teamData = {
      slug: slugify(teamName, { lower: true }), // Generate slug from team name
      name: teamName,
      club: userClub, // needs to become dynamic at some point
    };

    const response = await fetch(`/api/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });

    if (response.ok) {
      mutateTeams();
    }
  }

  return (
    <div>
      <h2>{userClub}</h2>
      <StyledList>
        {userClubData.map((team) => (
          <li key={team._id} style={{ position: "relative" }}>
            <div>
              <StyledPolygon
                xmlns="http://www.w3.org/2000/svg"
                width="102"
                height="88"
                viewBox="0 0 51 44"
                fill="none"
              >
                <path
                  id="Vector"
                  d="M12.7491 44H38.2509L51 22.0018L38.2509 0H12.7491L0 22.0018L12.7491 44Z"
                  fill="#008000"
                />
              </StyledPolygon>
              <StyledCounter>
                <TeamCounter
                  name={team.name}
                  availableTimeSlots={availableTimeSlots}
                />
              </StyledCounter>
              <StyledTeamName>
                <Link href={`/club/${team.slug}`}>{team.name}</Link>
              </StyledTeamName>
            </div>
          </li>
        ))}
        <li>
          <div style={{ position: "relative", width: "102px", height: "88px" }}>
            <StyledPolygon
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="88"
              viewBox="0 0 51 44"
              fill="none"
            >
              <path
                id="Vector"
                d="M12.7491 44H38.2509L51 22.0018L38.2509 0H12.7491L0 22.0018L12.7491 44Z"
                fill="black"
              />
            </StyledPolygon>
            <StyledPlusButton onClick={handleButtonClick}>+</StyledPlusButton>
          </div>
        </li>
        <li>
          {isButtonClicked && (
            <TeamForm
              onAddTeam={handleAddTeam}
              onButtonClick={handleButtonClick}
            />
          )}
        </li>
      </StyledList>
    </div>
  );
}
