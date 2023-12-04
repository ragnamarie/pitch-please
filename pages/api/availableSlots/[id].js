import dbConnect from "@/db/dbConnect";
import AvailableSlot from "@/db/models/AvailableSlot";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const availableSlot = await AvailableSlot.findOne({ id: id });

    if (!availableSlot) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(availableSlot);
  }

  if (request.method === "PATCH") {
    await AvailableSlot.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }
}
