import { catchAsync } from "../middlewares/catchAsyncError.js";
import BookingModel from "../models/booking.model.js";

export const createBooking = catchAsync(async (req, res, next) => {
  const booking = await BookingModel.create({});
  res.status(201).json({
    booking,
  });
});

export const getAllBooking = catchAsync(async (req, res, next) => {
  const list = await BookingModel.find();

  res.status(200).json(list);
});
