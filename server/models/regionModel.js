import mongoose from "mongoose";

const regionSchema = mongoose.Schema({
    regions_name : {
        type: String,
        required: true
    },
    city_provice_id : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'CityProvice'
    }]
}, {
    timestamp : true
});

export default mongoose.model("Place", regionSchema);