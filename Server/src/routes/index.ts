import { Router } from "express";
import userRoutes from "./usersRoute";
import dietPlanRoutes from './diePlanRoutes'
import bmiPlanRoutes from './bmiRoutes'
const router = Router();

// Versioned routing prefix is added in app.ts using env.BASIC_API_URL

router.use('/users', userRoutes);
router.use('/diet', dietPlanRoutes);
router.use('/bmi', bmiPlanRoutes);

export default router;
