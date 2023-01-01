import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  phone_number: {
    type: String,
    require: true,
  },
  booking_infor: {
    time: {
      type: String,
      require: true,
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      require: true,
    },
  },
});

export default mongoose.model("Booking", bookingSchema);
