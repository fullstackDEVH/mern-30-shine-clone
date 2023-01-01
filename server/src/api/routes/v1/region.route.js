import express from 'express';
import {createRegion, deleteRegion, getRegion, getAllRegions, updateRegion, getRegionCityProvice} from "../../controllers/place.controller.js";

const router = express.Router();

router.get('/all', getAllRegions);
router.post('/', createRegion);

router.put('/:regionId', updateRegion);
router.delete('/:regionId', deleteRegion);
router.get('/:regionId', getRegion);
router.get('/citiesprovice', getRegionCityProvice);


export default router;