import mongoose from "mongoose";

const { Schema } = mongoose;

const teamSchema = new Schema({
  name: { type: String, required: true },
});

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
