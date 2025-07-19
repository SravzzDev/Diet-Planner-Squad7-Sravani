import express from 'express';
import { getDietPlanByUser,getDailyDietPlan,getWeeklyDietPlan } from '../modules/dietPlan/dietPlanController';

const router = express.Router();

router.get('/:userId', getDietPlanByUser);
router.get('/daily/:userId', getDailyDietPlan);
router.get('/weekly/:userId', getWeeklyDietPlan);
export default router;
