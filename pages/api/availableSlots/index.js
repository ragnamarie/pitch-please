import { availableSlots } from "@/lib/data";

export default function handler(request, response) {
  console.log("Avaliable Slots:", availableSlots);
  response.status(200).json(availableSlots);
}
