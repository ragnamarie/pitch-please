import GlobalStyle from "../styles";
import Layout from "@/Components/Layout";
import { SWRConfig } from "swr";
import { useState } from "react";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps, session }) {
  const {
    data: availableSlotsData,
    isLoading: isLoadingAvailableSlotsData,
    mutate: mutateAvailableSlots,
  } = useSWR("/api/availableSlots", fetcher);

  const [selectedSlots, setSelectedSlots] = useLocalStorageState(
    "selectedSlots",
    {
      defaultValue: [],
    }
  );

  // this is for the report form
  const [formValues, setFormValues] = useState();
  // this is for the report form

  if (isLoadingAvailableSlotsData) {
    return <h1>LOADING...</h1>;
  }

  if (!availableSlotsData) {
    return;
  }

  async function handleSlotChange(event, teamSlug, teamName, clubName) {
    const selectedValue = event.target.value;
    const selectedSlot = availableSlotsData.find(
      (slot) =>
        `${slot.locationName} - ${slot.day} - ${slot.time}` === selectedValue
    );

    console.log("Selected Slot:", selectedSlot);

    if (selectedSlot) {
      if (!selectedSlots.some((slot) => slot.id === selectedSlot.id)) {
        setSelectedSlots((prevSelectedSlots) => [
          ...prevSelectedSlots,
          selectedSlot,
        ]);

        try {
          // Make a PATCH request to update the slot in the database
          const response = await fetch(
            `/api/availableSlots/${selectedSlot._id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                isAvailable: false,
                teamName: teamName,
                teamSlug: teamSlug,
                clubName: clubName,
              }),
            }
          );

          if (!response.ok) {
            // Handle the error based on your application's requirements
            console.error("Failed to update slot in the database");
            return;
          }

          // If the update was successful, you can trigger a refetch or update the local state as needed
          mutateAvailableSlots();
        } catch (error) {
          console.error("An error occurred while updating the slot:", error);
          // Handle the error based on your application's requirements
        }
      }
    }
  }

  async function handleSlotRelease(event, clubName) {
    console.log("handleSlotRelease function is called");
    const selectedValue = event.target.value;

    // Find the selected slot based on the value
    const selectedSlot = selectedSlots.find(
      (slot) =>
        `${slot.locationName} - ${slot.day} - ${slot.time}` === selectedValue
    );
    console.log("Selected Slot2:", selectedSlot);

    // Check if the selected slot exists and has been selected
    if (selectedSlot) {
      try {
        // Make a PATCH request to update the slot in the database
        const response = await fetch(
          `/api/availableSlots/${selectedSlot._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              isAvailable: true,
              teamName: null,
              teamSlug: null,
              clubName: clubName,
            }),
          }
        );

        if (!response.ok) {
          // Handle the error based on your application's requirements
          console.error("Failed to update slot in the database");
          return;
        }

        mutateAvailableSlots();

        // Remove the selected slot from the selectedSlots array
        setSelectedSlots((prevSelectedSlots) =>
          prevSelectedSlots.filter((slot) => slot.id !== selectedSlot.id)
        );
      } catch (error) {
        console.error("An error occurred while updating the slot:", error);
        // Handle the error based on your application's requirements
      }
    }
  }

  // this is for the report form
  function handleFormValues(
    reportedTeam,
    reportedClub,
    reportedTime,
    reportedDay,
    reportedPitch,
    reportedSlug
  ) {
    setFormValues({
      reportedClub: reportedClub,
      reportedTeam: reportedTeam,
      reportedTime: reportedTime,
      reportedDay: reportedDay,
      reportedPitch: reportedPitch,
      reportedSlug: reportedSlug,
    });
  }
  // this is for the report form

  console.log(availableSlotsData);

  return (
    <SessionProvider session={session}>
      <SWRConfig value={{ fetcher }}>
        <Layout availableTimeSlots={availableSlotsData}>
          <GlobalStyle />
          <Component
            {...pageProps}
            onSlotChange={handleSlotChange}
            onSlotRelease={handleSlotRelease}
            availableTimeSlots={availableSlotsData}
            onFormValues={handleFormValues}
            formValues={formValues}
          />
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}

// OLD SLOTCHANGE WITHOUT DATABASE UPDATE
// function handleSlotChange(event, teamSlug, teamName) {
//   const selectedValue = event.target.value;
//   // Find the selected slot based on the value
//   const selectedSlot = availableSlotsData.find(
//     (slot) =>
//       `${slot.locationName} - ${slot.day} - ${slot.time}` === selectedValue
//   );

//   // Update the available property to false
//   if (selectedSlot) {
//     // Check if the slot is not already selected
//     if (!selectedSlots.some((slot) => slot.id === selectedSlot.id)) {
//       setSelectedSlots((prevSelectedSlots) => [
//         ...prevSelectedSlots,
//         selectedSlot,
//       ]);
//       mutateAvailableSlots((prevAvailableSlots) => {
//         const updatedData = prevAvailableSlots.map((slot) =>
//           slot.id === selectedSlot.id
//             ? {
//                 ...slot,
//                 isAvailable: false,
//                 teamName: teamName,
//                 teamSlug: teamSlug,
//               }
//             : slot
//         );
//         return updatedData;
//       }, false);
//     }
//   }
// }

// OLD SLOTCHANGE WITHOUT DATABASE UPDATE
// function handleSlotRelease(event) {
//   const selectedValue = event.target.value;
//   // Find the selected slot based on the value
//   const selectedSlot = selectedSlots.find(
//     (slot) =>
//       `${slot.locationName} - ${slot.day} - ${slot.time}` === selectedValue
//   );

//   // Check if the selected slot exists and has been selected
//   if (selectedSlot) {
//     // Update the available property to true and remove teamName and teamSlug
//     mutateAvailableSlots((prevAvailableSlots) => {
//       const updatedData = prevAvailableSlots.map((slot) =>
//         slot.id === selectedSlot.id
//           ? {
//               ...slot,
//               isAvailable: true,
//               teamName: null,
//               teamSlug: null,
//             }
//           : slot
//       );
//       return updatedData;
//     }, false);

//     // Remove the selected slot from the selectedSlots array
//     setSelectedSlots((prevSelectedSlots) =>
//       prevSelectedSlots.filter((slot) => slot.id !== selectedSlot.id)
//     );
//   }
// }

// OLD MUTATE FOR SLOTRELEASE
// mutateAvailableSlots((prevAvailableSlots) => {
//   const updatedData = prevAvailableSlots.map((slot) =>
//     slot.id === selectedSlot.id
//       ? {
//           ...slot,
//           isAvailable: true,
//           teamName: null,
//           teamSlug: null,
//           clubName: null,
//         }
//       : slot
//   );
//   return updatedData;
// }, false);

// OLD MUTATE FOR SLOTCHANGE
// mutateAvailableSlots((prevAvailableSlots) => {
//   const updatedData = prevAvailableSlots.map((slot) =>
//     slot.id === selectedSlot.id
//       ? {
//           ...slot,
//           isAvailable: false,
//           teamName: teamName,
//           teamSlug: teamSlug,
//           clubName: clubName,
//         }
//       : slot
//   );
//   return updatedData;
// }, false);
