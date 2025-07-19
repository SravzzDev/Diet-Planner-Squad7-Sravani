import { Request, Response } from 'express';
import BMI from '../../models/BMI';
import User from '../../models/UserModel';

export const calculateAndSaveBMI = async (req: Request, res: Response):Promise<any> => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const heightInMeters = user.height / 100;
    const bmi = user.weight / (heightInMeters * heightInMeters);
    let category: string = 'Normal';
    if (bmi < 18.5) category = 'underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'overweight';
    else category = 'obese';

    const bmiRecord = new BMI({ userId, bmi: parseFloat(bmi.toFixed(2)), bmiCategory: category });
    await bmiRecord.save();

    res.json({ bmi: bmiRecord.bmi, category });
  } catch (err) {
    res.status(500).json({ error: 'BMI calculation failed' });
  }
};
