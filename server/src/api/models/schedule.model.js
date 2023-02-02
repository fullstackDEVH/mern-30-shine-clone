/*
    number : ghế trống,
    maxnumber : ghế tối đa
    time : thời gian lam viec
    date : ngày lam viec
    salonId : lịch của salon
*/

import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const scheduleSchema = new Schema({
    salonId : mongoose.Types.ObjectId,
    number : Number,
    maxNumber : Number,
    date : Date,
    time : String
});
// verify otp on user,
    // automate delete before 1 minute createdAt : {type : Date, expires : '1m', default: Date.now}

export default model('otp', scheduleSchema);