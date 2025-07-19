import express from 'express';
import { calculateAndSaveBMI } from '../modules/bmi/bmiController';

const router = express.Router();

router.post('/calculate/:userId', calculateAndSaveBMI);

export default router;
