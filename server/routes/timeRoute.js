import express from 'express';
import {createTime, createTimeHour, getAllTimeSalon, getTimeSalon} from "../controllers/timeController";
const router = express.Router();

router.post('/:timeId', createTimeHour);
router.post('/', createTime);

router.get('/:salonId', getTimeSalon);
router.get('/all', getAllTimeSalon);

export default router;