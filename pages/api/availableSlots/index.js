import dbConnect from "@/db/dbConnect";
import AvailableSlot from "@/db/models/AvailableSlot";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const availableSlots = await AvailableSlot.find();

    // console.log(availableSlots);
    return response.status(200).json(availableSlots);
  }
}
