import mongoose from "mongoose";

const cityProviceSchema = new mongoose.Schema({
    city_provice_name: {
        type: String,
    },
    agencys_Id : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Agency"
        }
    ]
    
},{
    timestamps : true
});

export default mongoose.model("CityProvice", cityProviceSchema);

