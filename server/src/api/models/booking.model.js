import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref : "User",
    require: true,
  },
  services : [
    {

    }
  ],
  salonId : {

  },
  status : String,
  dateOfStart : Date,
  timeType : String

  
});

export default mongoose.model("Booking", bookingSchema);
