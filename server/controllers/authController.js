import UserModel from "../models/userModel";
import ErrorHandler from "../ultills/errorHandle";
import {sendCookies} from "../ultills/jwtAndCookies";
import {catchAsync} from "../middleware/catchAsyncError";

export const register = catchAsync( 
    async (req, res, next) => {
        const body = req.body;
        const user =  await UserModel.findOne({ phone_number : req.body.phone_number});
    
        if(user){
            return next(new ErrorHandler('User is exist', 400));
        };
    
        const newUser = await UserModel.create({...body, is_verify : true});

        sendCookies(newUser, 201, res);
    }
);

export const login = catchAsync(
    async (req, res, next) => {
        const { phone_number, password } = req.body;
     
        if(!phone_number || !password) {
            return next(new ErrorHandler('Please, enter your phone number and password'));
        };
        
        const user = await UserModel.findOne({ phone_number}).select('+password');

        if(!user) {
            return next(new ErrorHandler('Wrong Credential', 401));
        };
     
        const checkPassword = await user.comparePassword(password);
    
        if(!checkPassword) {
            return next(new ErrorHandler('Wrong password', 400));
        };
    
        sendCookies(user, 200, res);
    }
);

export const logout = catchAsync(
    (req, res, next) => {
        res.cookie('token', 'null', {
            expires: new Date(Date.now()),
            httpOnly: true
        });
    
        res.status(200).json({
            success: true,
            message : 'Logout successfully'
        });
    }
);

export const chekcOtp = catchAsync(
    async (req, res, next) => {
        const user = await UserModel.findOne({phone_number : req.body.phone_number});
        
        if(!user) {
            return next(new ErrorHandler("Can not found user"));
        };
    
        if(!user.is_verify){
            return res.status(200).json({
                is_verify : user.is_verify,
                message : "otp unverified"
            });

        };
    
        res.status(200).json({
            is_verify : user.is_verify,
            message : "otp verified"
        });
    }
);

export const checkPhoneNumber = catchAsync(
    async (req, res, next) => {

        const checkPhoneNumber = await UserModel.findOne({
            phone_number : req.query.phone_number
        });

        res.status(200).json({
            success : true,
            checkPhoneNumber : checkPhoneNumber ? true : false
        });
    }
);