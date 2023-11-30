import dbConnect from "@/db/dbConnect";
import Team from "@/db/models/Team";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const teams = await Team.find();
    console.log(teams);
    return response.status(200).json(teams);
  }

  //   if (request.method === "POST") {
  //     try {
  //       const teamData = request.body;
  //       console.log(teamData);
  //       await Team.create(teamData);

  //       response.status(201).json({ status: "Team created" });
  //     } catch (error) {
  //       console.log(error);
  //       response.status(400).json({ error: error.message });
  //     }
  //   }
}
