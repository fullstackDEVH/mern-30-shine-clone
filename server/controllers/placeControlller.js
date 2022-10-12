import ErrorHandler from "../ultills/errorHandle";
import RegionModel from "../models/regionModel";
import CityProviceModel from "../models/cityProviceModel";
import AgencysModel from "../models/agencysModel";

import { catchAsync } from "../middleware/catchAsyncError";
import cityProviceModel from "../models/cityProviceModel";
import agencysModel from "../models/agencysModel";
import mongoose from "mongoose";

// region
export const createRegion = catchAsync(
    async (req, res, next) => {
        const region = req.body.regions_name;
       
        const newRegion = await RegionModel.create({
            regions_name : region
        });
    
        res.status(200).json({
            newRegion,
            success : true
        });
    }
);

export const updateRegion = catchAsync(
    async (req, res, next ) => {
        const region = await RegionModel.findById(req.params.regionId);
        if(!region) {
            return next(new ErrorHandler('Region is not exist !!!', 400));
        };
      
        const regionUpdate = await region.updateOne(
            { $set : req.body}
        );
    
        res.status(200).json({
            message : "Update region success"
        });
    }
);

export const getRegion = catchAsync(
    async (req, res, next ) => {
        const region = await RegionModel.findById(req.params.regionId);
        if(!region) {
            return next(new ErrorHandler("region is not exist !!!", 400));
        };
    
        res.json({
            success : true,
            region
        });
    }
);

export const getAllRegions = catchAsync(
    async (req, res, next ) => {
        const list = await RegionModel.find().populate('city_provice_id', ['city_provice_name', '_id', 'agencys_Id']);

        if(!list) {
            return next(new ErrorHandler('Can not found regions', 400)); 
        };

        res.status(200).json({
            regions : list
        });
    }
);

export const getRegionCityProvice = catchAsync(
    async (req, res, next) =>{
        const region = await RegionModel.find();
       
        const list = await Promise.all(region.map(item => {
            // mỗi t là 1 mảng region
            let t =  Promise.all(item.city_provice_id.map(e => {
                return CityProviceModel.findById(mongoose.Types.ObjectId(e), {city_provice_name : 1, _id : 1})
            }))
            // list là 1 mảng các [t, t, t] theo item
            return t;
            })
        );
     
        let g = []
        region.forEach((e, ie)=> {
            list.map((item, i) =>{
                if(ie === i ){
                    g.push({
                        region_name : e.regions_name,
                        item
                    })
                }
            });
        })
        res.status(200).json(
           { list : g}
        );
    }
);

export const deleteRegion = catchAsync(
    async (req, res, next ) => {

        const session = await mongoose.startSession();
        session.startTransaction();

        const region = await RegionModel.findByIdAndDelete(req.params.regionId, {session}).populate('city_provice_id');

        if(!region){
            return next(new ErrorHandler('Can not found region', 400));
        };

        // delete provice, agency in region
        await Promise.all(region.city_provice_id.map(e => {
            Promise.all(e.agencys_Id.map(o => {
                return AgencysModel.findByIdAndRemove(o, {session});
            }));
            return CityProviceModel.findByIdAndRemove(e._id, {session});
        }));

        await session.commitTransaction();
      
        res.status(200).json({
            success : true,
            message : "delete region success"
        });
    }
);

// city provice
export const createCityProvice = catchAsync(
    async (req, res, next) => {
        const regionId = req.params.regionId;
    
        const newCityProvice = new CityProviceModel(req.body);
        
        try {
            const saveCityProvice = await newCityProvice.save();
            await RegionModel.findByIdAndUpdate(regionId, {
                $push : { city_provice_id: saveCityProvice._id }
            });
        } catch (error) {
            next(error);
        };
    
        res.status(200).json({
            message : 'create city provice success',
            success : true,
            // region 
        });
    }
);

export const deleteProvice = catchAsync(
    async (req, res, next) => {
        const proviceId = req.params.proviceId;
        let provice = await CityProviceModel.findByIdAndRemove(proviceId);
        await provice.agencys_Id ;
        // c1 : có thêm regionId
        if(!provice){
            return next(new ErrorHandler('Can not found Provice', 400));
        };
    }
);

export const getAllCityProvice = catchAsync(
    async (req, res, next) => {
        const list = await CityProviceModel.find();

        if(!list) {
            return next(new ErrorHandler("Can not found city provice", 400));
        };

        res.status(200).json(list);
    }
);

// search
export const getCountCityProvice = catchAsync(
    async (req, res, next) => {
       
        const keyword = req.query.keyword.length !== 0 ? {
            city_provice_name : {
                $regex : req.query.keyword,
                $options : "$i"
            }
        } : {};

        const list = await cityProviceModel.find({...keyword}).sort({agencys_Id : -1});
        res.status(200).json(list);
    }
);
// agencys
export const createAgencys = catchAsync(
    async (req, res, next) => {
        const cityProviceId = req.params.cityProviceId;
    
        const newAgency = new AgencysModel(req.body);
        const saveAgency = await newAgency.save();
    
        try {
            await CityProviceModel.findByIdAndUpdate(cityProviceId, {
                $push : { agencys_Id: saveAgency._id }
            });
        } catch (error) {
            next(error);
        }
    
        res.status(200).json({
            message : 'create agency success',
            success : true,
            // region 
        });
    }
);

export const getAllAgency = catchAsync(
    async (req, res, next) => {
        const list = await AgencysModel.find();

        if(!list) {
            return next(new ErrorHandler("Can not found agencys", 400));
        };

        res.status(200).json(list);
    }
);

export const getCityProviceAgency = catchAsync(
    async (req, res, next) => {
        const cityProvice = await CityProviceModel.findById(req.params.cityProviceId);

        if(!cityProvice) {
            return next(new ErrorHandler("Can not found City Provice", 400));
        };
        
        // c1 : Promise.all
        const list = await Promise.all(cityProvice.agencys_Id.map(item=> {
            return agencysModel.findById(item);
        }));
        // c2 : populate

        res.status(200).json(list);
    }
);