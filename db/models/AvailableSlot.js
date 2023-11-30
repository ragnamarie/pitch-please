import mongoose from "mongoose";

const { Schema } = mongoose;

const availableSlotSchema = new Schema({
  time: { type: String, required: true },
  day: { type: String, required: true },
  location: { type: String, required: true },
  isAvailable: { type: Boolean, required: true },
});

const AvailableSlot =
  mongoose.models.AvailableSlot ||
  mongoose.model("AvailableSlot", availableSlotSchema);

export default AvailableSlot;
