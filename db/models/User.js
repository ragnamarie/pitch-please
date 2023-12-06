import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  create_at: { type: Date, default: Date.now },
  clubName: { type: String },
  managerName: { type: String },
});

const User = models.User || model("User", userSchema);

export default User;
