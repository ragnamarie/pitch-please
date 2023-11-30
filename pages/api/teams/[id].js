import dbConnect from "@/db/dbConnect";
import Team from "@/db/models/Team";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const team = await Team.findById(id);

    if (!team) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(team);
  }
}
