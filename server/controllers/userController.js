import UserModel from "../models/userModel";
import ErrorHandler from "../ultills/errorHandle";

export const userDetails = async (req, res, next) => {

    const {id} = req.user;

    const user = await UserModel.findById(id);

    if(!user) {
        return next(new ErrorHandler('Can not found user', 400));
    };

    res.status(200).json(user)
};

export const userUpdate = async (req, res, next) => {
    const newUser = {
        name : req.body.name,
        email : req.body.email,
        address : req.body.address
    };

    if(req.body.avatar) {

    };

    const user = await UserModel.findByIdAndUpdate(
        req.user._id, newUser, { new : true, runValidators: true,}
    );
    res.status(200).json({
        success : true,
        user
    });
};

// admin
export const getAllUsers = async (req, res, next) => {
    const listUser = await UserModel.find();

    if(!listUser) {
        return next(new ErrorHandler('Can not get list users', 500));
    }
    res.status(200).json({
        success: true,
        listUser
    });
};

// admin
export const singleUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    if(!user) {
        return next(new ErrorHandler('Can not found user', 400));
    };

    res.status(200).json({
        success: true,
        user
    });
};

// admin
export const adminUpdate = async (req, res, next) => {
    const newUser = req.body.user;

    const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        { 
            $set : newUser
        },
        { 
            new : true
        }
    );

    res.status(200).json({
        success : true,
        user
    })
};

// admin
export const deleteUser = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userId);

    if(!user) {
        return next(new ErrorHandler('Can not found user', 400));
    };

    await user.remove();

    res.status(200).json({
        success: true,
        message: 'User deleted successfully'
    });
};