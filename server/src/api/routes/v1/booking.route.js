import express from "express";
import { createBooking } from "../../controllers/booking.controller.js";
const router = express.Router();

router.post("/", createBooking);
router.get("/all");

export default router;
