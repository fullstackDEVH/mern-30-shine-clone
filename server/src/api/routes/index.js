import express from 'express';
import userRoute from './v1/user.route.js';
import authRoute from './v1/auth.route.js';

const router = express.Router();

router.use('/api/v1/user', userRoute);
router.use('/api/v1/auth', authRoute);

export default router;