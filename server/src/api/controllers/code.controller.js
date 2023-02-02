import { catchAsync } from "../middlewares/catchAsyncError.js";
import CodeModel from "../models/allcode.model.js";

export const createCode = catchAsync(
    async (req, res, next) => {
        const { type, sign, value } = req.body;
        const code = new CodeModel({type, sign, value});

        await code.save();

        res.status(200).json({
            message : "create successfully"
        });
    }
);