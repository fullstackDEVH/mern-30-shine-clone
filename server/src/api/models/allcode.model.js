import mongoose from "mongoose";

const CodeSchema = new mongoose.Schema(
  {
    type : String,
    sign : String,
    value : String
  }
);

export default mongoose.model("Code", CodeSchema);
