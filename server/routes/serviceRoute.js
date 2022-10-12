import express from 'express';
import { createService, createServiceItem, deleteService, deleteServiceItem, getAllService, getService, updateService } from "../controllers/serviceController";
const router = express.Router();

router.get('/all', getAllService);

router.post('/:serviceId', createServiceItem);
router.post('/', createService);

router.delete('/:serviceId/item/:itemId', deleteServiceItem);
router.delete('/:serviceId', deleteService);
router.put('/:serviceId', updateService);

router.get('/:serviceId', getService);



export default router;