import express from 'express';
import {deleteUser, getAllUsers, userDetails} from "../controllers/userController";
import { isUser } from '../middleware/authentication';
const router = express.Router();

router.delete('/:userId', deleteUser);
router.get('/all', getAllUsers);
router.get('/me', isUser, userDetails);


export default router;