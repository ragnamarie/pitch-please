import dbConnect from "@/db/dbConnect";
import User from "@/db/models/User";

export default async function handler(req, res) {
  const { googleId } = req.query;

  try {
    await dbConnect();

    const users = await User.find({ googleId });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
}
