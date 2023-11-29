import { availableSlots } from "@/lib/data";

export default function handler(request, response) {
  const { id } = request.query;

  const availableSlot = availableSlots.find(
    (availableSlot) => availableSlot.id === id
  );

  if (!availableSlot) {
    return response.status(404).json({ status: "Not Found" });
  }

  console.log(availableSlot);
  response.status(200).json(availableSlot);
}
