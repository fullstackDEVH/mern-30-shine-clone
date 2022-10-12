import { catchAsync } from "../middleware/catchAsyncError.js";
import BookingModel from "../models/BookingModel.js";

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
