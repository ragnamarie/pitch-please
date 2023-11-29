import { teams } from "@/lib/data.js";

export default function handler(request, response) {
  console.log("Teams:", teams);
  response.status(200).json(teams);
}
