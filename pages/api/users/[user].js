import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    await dbConnect();

    const posts = await Post.find({ userId });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
}
