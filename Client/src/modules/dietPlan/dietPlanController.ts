import { Request, Response } from 'express';
import DietPlan from '../../models/DietPlan';
import BMI from '../../models/BMI';
import User from '../../models/UserModel';



export const getDietPlanByUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = req.params.userId;

    // Fetch the most recent diet plan for the user
    const dietPlan = await DietPlan.findOne({ userId }).sort({ date: -1 });

    if (!dietPlan) {
      return res.status(404).json({ message: 'No diet plan found for this user.' });
    }

    res.json(dietPlan);
  } catch (error) {
    console.error('Error fetching diet plan:', error);
    res.status(500).json({ error: 'Failed to fetch diet plan.' });
  }
};
export const getDailyDietPlan = async (req: Request, res: Response) :Promise<any>=> {
  try {
    const userId = req.params.userId;
    const dietPlan = await DietPlan.findOne({ userId, planType: 'daily' }).sort({ date: -1 });
    if (!dietPlan) return res.status(404).json({ message: 'No daily diet plan found.' });
    res.json(dietPlan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch daily diet plan.' });
  }
};
export const getWeeklyDietPlan = async (req: Request, res: Response):Promise<any> => {
  try {
    const userId = req.params.userId;
    const dietPlan = await DietPlan.findOne({ userId, planType: 'weekly' }).sort({ weekStart: -1 });
    if (!dietPlan) return res.status(404).json({ message: 'No weekly diet plan found.' });
    res.json(dietPlan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weekly diet plan.' });
  }
};

