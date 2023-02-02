import express from 'express';
import { createCode } from '../../controllers/code.controller.js';
const router = express.Router();

router.post('/create', createCode);

export default router;