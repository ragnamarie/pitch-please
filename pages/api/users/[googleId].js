import dbConnect from "@/db/dbConnect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  const { googleId } = request.query;
  console.log("api" + googleId);
  console.log(request.body);

  try {
    await dbConnect();

    const users = await User.find({ googleId });

    response.status(200).json(users);
  } catch (error) {
    console.log(error);
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
