import mongoose from "mongoose";

const placeChildrenModel = mongoose.Schema({
    place_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Place'
    },
    agencys : [
        {
            image : {
                type : String,
            },
            address : {
                type : String,
            },
            desc : {
                type : String,
            }
        }
    ]
});

export default mongoose.model('PlaceChildren', placeChildrenModel);