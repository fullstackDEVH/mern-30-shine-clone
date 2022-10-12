import ServiceModel from "../models/serviceModel";
import ErrorHandle from "../ultills/errorHandle";
import { catchAsync } from "../middleware/catchAsyncError";

export const createService = catchAsync(
    async (req, res, next) => {
        const newService = new ServiceModel(req.body);
        await newService.save();
    
        res.status(200).json({
            success : true,
            message : "create service success"
        });
    }
);

export const createServiceItem = catchAsync(
    async (req, res, next) =>{
        const service = await ServiceModel.findById(req.params.serviceId);
        console.log(req.body)
        const isService = service.service_list.find(
            e => e.name.toLowerCase() === req.body.name.toLowerCase()
        );
        
        if(isService) {
            service.service_list.forEach(item => {
                if(item.name.toLowerCase() === req.body.name.toLowerCase()){
                    item.price = req.body.price;
                    item.desc = req.body.desc;
                }
            })
        }else{
            service.service_list.push(req.body);
        };
    
        await service.save();
    
        res.status(200).json({
            success : true,
            message : "create service item succsess"
        });
    }
);

export const updateService = catchAsync(
    async (req, res, next) => {
        const service = await ServiceModel.findById(req.params.serviceId);
        const { service_name ,serviceItem, itemId } = req.body;   
    
        service.service_name = service_name;
    
        service.service_list.forEach(item => {
            if(item._id.toString() === itemId.toString()){
                item.name = serviceItem.name;
                item.desc = serviceItem.desc;
                item.price = serviceItem.price;
            };
        });
    
        service.save({ validateBeforeSave : false });
    
        res.status(200).json({
            success : true,
            message : "update service sucess"
        });
    }
);

export const getService = catchAsync(
    async (req, res, next) => {
        const service = await ServiceModel.findById(req.params.serviceId);
    
        if(!service) {
            return next(new ErrorHandle("Can not found service", 400));
        };
    
        res.status(200).json({
            service,
            success : true
        });
    }
);

export const getAllService = catchAsync(
    async (req, res, next) => {
        const list = await ServiceModel.find();
        res.status(200).json({
            success : true,
            list
        });
    }
);

export const deleteService = catchAsync(
    async ( req, res, next) => {
        const service = await ServiceModel.findById(req.params.serviceId);
    
        if(!service) {
            return next(new ErrorHandle('Can not found service', 400));
        };
    
        await service.delete();
        res.status(200).json({
            success : true,
            message : `Delete ${service.service_name} success`
        });
    }
);

export const deleteServiceItem = catchAsync(async (req, res, next) => {
    const service = await ServiceModel.findById(req.params.serviceId);

    if(!service) {
        return next(new ErrorHandle("Service item not found", 400));
    };

    const newList = [];
    service.service_list.forEach(item => {
        if(item._id.toString() !== req.params.itemId) {
            newList.push(item);
        };
    })
    
    service.service_list = newList;

    await service.save();
    res.status(200).json({
        success : true,
        message : `Delete service item success`,
        newList
    });
});
