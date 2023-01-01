import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    service_name : {
        type : String,
        required : true
    },
    service_list : [
        {
            name : {
                type : String,
                required : true
            },
            price : {
                type: String,
                default : 0
            },
            desc : {
                type : String,
                required : true
            },
            images : [
                {
                    public_id: {
                      type: String,
                      
                    },
                    url: {
                      type: String,
                     
                    },
                },
            ]
        }
    ]
});

export default mongoose.model("Service", serviceSchema);