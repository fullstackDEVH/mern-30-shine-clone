import express from 'express';
import {register, login, logout,chekcOtp, checkPhoneNumber} from "../../controllers/auth.controller.js";
const router = express.Router();

router.post('/login', login);
router.get('/checkphone', checkPhoneNumber);
router.post('/register', register);
router.get('/logout', logout);
router.post('/checkotp', chekcOtp);

export default router;