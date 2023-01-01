import express from 'express';
import { createAgencys,getAllAgency ,getCityProviceAgency} from '../../controllers/place.controller.js';

const router = express.Router();

router.get('/all', getAllAgency);
router.post('/:cityProviceId', createAgencys);
router.get('/:cityProviceId', getCityProviceAgency);



export default router;