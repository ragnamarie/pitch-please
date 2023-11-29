import GlobalStyle from "../styles";
import Layout from "@/Components/Layout";
import { SWRConfig } from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data: availableSlotsData, isLoading: isLoadingAvailableSlotsData } =
    useSWR("/api/availableSlots", fetcher);

  const [selectedSlots, setSelectedSlots] = useState([]);

  if (isLoadingAvailableSlotsData) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!availableSlotsData) {
    return;
  }

  const handleSlotChange = (event) => {
    const selectedValue = event.target.value;
    // Find the selected slot based on the value
    const selectedSlot = availableSlotsData.find(
      (slot) =>
        `${slot.time} - ${slot.day} - ${slot.location}` === selectedValue
    );

    // Update the available property to false
    if (selectedSlot) {
      // Check if the slot is not already selected
      if (!selectedSlots.some((slot) => slot.id === selectedSlot.id)) {
        setSelectedSlots([...selectedSlots, selectedSlot]);
      }
      console.log(availableSlotsData);
    }
  };

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <GlobalStyle />
          <Component
            {...pageProps}
            onSlotChange={handleSlotChange}
            availableTimeSlots={availableSlotsData}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
