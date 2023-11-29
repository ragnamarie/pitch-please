import Link from "next/link";
import useSWR from "swr";

export default function AvailableSlots() {
  const { data, isLoading } = useSWR("/api/availableSlots");

  if (isLoading) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data);

  return (
    <div>
      <label>Select an available slot:</label>
      <select>
        {data.map((availableSlot) => (
          <option
            key={availableSlot.id}
            value={`${availableSlot.time} - ${availableSlot.day} - ${availableSlot.location}`}
          >
            {availableSlot.time}, {availableSlot.day}, {availableSlot.location}
          </option>
        ))}
      </select>
    </div>
  );
}
