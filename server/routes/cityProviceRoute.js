import express from 'express';
import { createCityProvice, getAllCityProvice, getCountCityProvice } from '../controllers/placeControlller';
const router = express.Router();

router.post('/:regionId', createCityProvice);
router.get('/all', getAllCityProvice);

router.get('/search', getCountCityProvice);

export default router;