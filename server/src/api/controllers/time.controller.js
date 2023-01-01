import timeModel from "../models/time.model.js";
import agencysModel from "../models/agencys.model.js";
import ErrorHandler from "../utils/errorHandle.js";
import { catchAsync } from "../middleware/catchAsyncError.js";

export const createTime = catchAsync(async (req, res, next) => {
  const time = await timeModel.create(req.body);

  res.status(200).json({
    success: true,
    message: "create time success",
    time,
  });
});

export const createTimeHour = catchAsync(async (req, res, next) => {
  const time = await timeModel.findById(req.params.timeId);

  time.hourGroup = req.body.hourGroup;
  await time.save();

  res.status(200).json({
    success: true,
    message: "create time hour success",
  });
});

export const getAllTimeSalon = catchAsync(async (req, res, next) => {
  const list = await timeModel.find();

  res.status(200).json(list);
});

export const getTimeSalon = catchAsync(async (req, res, next) => {
  // const salonTime = await timeModel.findById(req.params.salonId);
  //   all time working in agency
  const timeSalon = await agencysModel.findById(req.params.salonId);

  if (!timeSalon) {
    return next(new ErrorHandler("Can not found salon", 400));
  }

  res.status(200).json({
    success: true,
    salon: timeSalon,
  });
});
