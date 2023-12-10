import dbConnect from "@/db/dbConnect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  const { googleId } = request.query;
  console.log("api" + googleId);
  console.log(request.body);

  if (request.method === "GET") {
    try {
      await dbConnect();
      const user = await User.findOne({ googleId: googleId });
      response.status(200).json(user);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (request.method === "PATCH") {
    await User.findOneAndUpdate(
      { googleId },
      {
        $set: request.body,
      }
    );

    response.status(200).json({ message: "Success!" });
  }
}
