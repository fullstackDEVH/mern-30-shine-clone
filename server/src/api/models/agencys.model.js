import mongoose from "mongoose";

const agencysSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    address: {
      type: String,
    },
    desc: {
      type: String,
    },
    latitude: String,
    longitude: String,
    phone_contact: {
      type: String,
      default: "1800.20.21.22",
    },
    time_working: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Time",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Agency", agencysSchema);
