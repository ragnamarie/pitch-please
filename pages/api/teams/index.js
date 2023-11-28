import { teams } from "@/lib/teams";

export default function handler(request, response) {
  response.status(200).json(teams);
}
