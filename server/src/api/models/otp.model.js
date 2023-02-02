import { Schema, model } from 'mongoose';

const otpSchema = new Schema({
    phoneNumber : { type : String , required : true},
    otp : String,
    create : { type : Date, default : Date.now, expires : '5m'}
});
// verify otp on user,
    // automate delete before 1 minute createdAt : {type : Date, expires : '1m', default: Date.now}

export default model('otp', otpSchema);