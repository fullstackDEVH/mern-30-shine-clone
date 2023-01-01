import mongoose from "mongoose";

const timeSchema = mongoose.Schema({
  hourGroup: [
    {
      name: String,
      hour: [
        {
          hour: String,
          hourFrame: String,
          totalSlot: {
            type: Number,
            default: 3,
          },
          totalBook: {
            type: Number,
            default: 0,
          },
          totalEmpty: {
            type: Number,
            default: 0,
          },
          isWork: Boolean,
        },
      ],
    },
  ],
  lastHourWork: {
    hour: String,
    hourFrame: String,
  },
  /* salon: {
    address: String,
    img: String,
    name: String,
    phone: {
      type: String,
      default: "1800.28.28.30",
    },
    latitude: String,
    longitude: String,
  },*/
});

export default mongoose.model("Time", timeSchema);
