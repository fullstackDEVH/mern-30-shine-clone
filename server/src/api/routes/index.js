import express from 'express';

import userRoute from "./v1/user.route.js";
import authRoute from "./v1/auth.route.js";
import regionRoute from "./v1/region.route.js";
import cityProviceRoute from "./v1/cityProvice.route.js";
import agencyRoute from "./v1/agency.route.js";
import serviceRoute from "./v1/service.route.js";
import timeRoute from "./v1/time.route.js";
import bookingRoute from "./v1/booking.route.js";
import codeRoute from "./v1/code.route.js";




const router = express.Router();

router.use('/api/v1/user', userRoute);
router.use('/api/v1/auth', authRoute);
router.use('/api/v1/code', codeRoute);


export default router;