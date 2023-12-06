import Link from "next/link";
import useSWR from "swr";
import TeamForm from "../TeamForm";
import slugify from "slugify";
import TeamCounter from "../TeamCounter";
import { useSession } from "next-auth/react";

export default function TeamList({ availableTimeSlots }) {
  const { data: session } = useSession();

  const { data, isLoading, mutate } = useSWR(session ? "/api/teams" : null);

  if (isLoading) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data);

  async function handleAddTeam(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const teamName = formData.get("team");

    const teamData = {
      slug: slugify(teamName, { lower: true }), // Generate slug from team name
      name: teamName,
      club: "FSV Hansa 07 Kreuzberg", // needs to become dynamic at some point
    };

    const response = await fetch(`/api/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamData),
    });

    if (response.ok) {
      mutate();
    }
    console.log(teamData);
  }

  return (
    <div>
      <h2>FSV Hansa 07 Kreuzberg</h2>
      <ul
        style={{
          display: "flex",
          gap: "70px",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {data.map((team) => (
          <li key={team._id} style={{ position: "relative" }}>
            <div>
              <svg
                style={{
                  width: "88px",
                }}
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
              </svg>
              {/* Center the TeamCounter within the SVG */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "45px",
                  fontFamily: "Futura",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                <TeamCounter
                  name={team.name}
                  availableTimeSlots={availableTimeSlots}
                />
              </div>
              <div
                style={{
                  width: "143px",
                  height: "23.64px",
                  position: "absolute",
                  transform: "rotate(60deg)",
                  transformOrigin: "20 0",
                  textAlign: "center",
                  color: "black",
                  fontSize: "18px",
                  fontFamily: "Futura",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  top: "20px",
                  left: "40px",
                }}
              >
                <Link href={`/club/${team.slug}`}>{team.name}</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <TeamForm onAddTeam={handleAddTeam} />
    </div>
  );
}

// instead of Hansa it needs to display User, needs to be dynamic

/* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="51"
  height="44"
  viewBox="0 0 51 44"
  fill="none"
>
  <path
    id="Vector"
    d="M12.7491 44H38.2509L51 22.0018L38.2509 0H12.7491L0 22.0018L12.7491 44Z"
    fill="#008000"
  />
</svg>;

<div style="width: 117.97px; height: 135.66px; left: 0px; top: 0px; position: absolute">
  <div style="width: 51px; height: 44px; left: 0px; top: 46px; position: absolute; background: #008000"></div>
  <div style="width: 143px; height: 23.64px; left: 46.47px; top: 0px; position: absolute; transform: rotate(60deg); transform-origin: 0 0; text-align: center; color: black; font-size: 18px; font-family: Futura; font-weight: 700; word-wrap: break-word">
    1. Herren
  </div>
  <div style="left: 15px; top: 48px; position: absolute; color: white; font-size: 30px; font-family: Futura; font-weight: 700; word-wrap: break-word">
    2
  </div>
</div>; */
//   }

//   return (
//     <div>
//       <h2>FSV Hansa 07 Kreuzberg</h2>
//       <ul>
//         {data.map((team) => (
//           <li key={team._id}>
//             <div
//               style={{ width: "100%", height: "100%", position: "relative" }}
//             >
//               <div
//                 style={{
//                   width: "117.97px",
//                   height: "135.66px",
//                   left: "0px",
//                   top: "0px",
//                   position: "absolute",
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="51"
//                   height="44"
//                   viewBox="0 0 51 44"
//                   fill="none"
//                 >
//                   <path
//                     id="Vector"
//                     d="M12.7491 44H38.2509L51 22.0018L38.2509 0H12.7491L0 22.0018L12.7491 44Z"
//                     fill="#008000"
//                   />
//                 </svg>
//                 <div
//                   style={{
//                     width: "143px",
//                     height: "23.64px",
//                     left: "46.47px",
//                     top: "0px",
//                     position: "absolute",
//                     transform: "rotate(60deg)",
//                     transformOrigin: "0 0",
//                     textAlign: "center",
//                     color: "black",
//                     fontSize: "18px",
//                     fontFamily: "Futura",
//                     fontWeight: "700",
//                     wordWrap: "break-word",
//                   }}
//                 >
//                   <Link href={`/club/${team.slug}`}>{team.name}</Link>
//                 </div>
//                 <div
//                   style={{
//                     left: "15px",
//                     top: "48px",
//                     position: "absolute",
//                     color: "white",
//                     fontSize: "30px",
//                     fontFamily: "Futura",
//                     fontWeight: "700",
//                     wordWrap: "break-word",
//                   }}
//                 >
//                   <TeamCounter
//                     name={team.name}
//                     availableTimeSlots={availableTimeSlots}
//                   />
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <TeamForm onAddTeam={handleAddTeam} />
//     </div>
//   );
// }
