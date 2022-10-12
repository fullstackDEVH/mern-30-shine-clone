import express from 'express';
import { createAgencys,getAllAgency ,getCityProviceAgency} from '../controllers/placeControlller';

const router = express.Router();

router.get('/all', getAllAgency);
router.post('/:cityProviceId', createAgencys);
router.get('/:cityProviceId', getCityProviceAgency);



export default router;