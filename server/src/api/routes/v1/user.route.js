import express from 'express';
import {deleteUser, getAllUsers, userDetails} from "../../controllers/user.controller.js";
import { isUser } from '../../middlewares/authentication.js';
const router = express.Router();

router.get('/', (req, ress)=> {
    ress.send('hello')
});

router.get('/all', getAllUsers);
router.get('/me', isUser, userDetails);
router.delete('/:userId', deleteUser);


export default router;