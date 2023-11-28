import { teams } from "@/lib/data.js";

export default function handler(request, response) {
  const { id } = request.query;

  const team = teams.find((team) => team.id === id);

  if (!team) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(team);
}
