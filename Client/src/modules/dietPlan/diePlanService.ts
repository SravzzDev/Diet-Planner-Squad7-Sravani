import DietPlan from '../../models/DietPlan';
import User from '../../models/UserModel';

class DietPlanService {
  static async generateDietPlan(userId: string, bmi: number, healthGoals: string) {
    // Logic to generate a diet plan based on user's BMI and health goals
    const user = await User.findById(userId);

    // Dummy data for the meal plan, you can replace this with a more dynamic generation
    const meals = {
      breakfast: 'Oatmeal with fruits',
      lunch: 'Grilled chicken with vegetables',
      dinner: 'Salmon with quinoa',
      snacks: 'Almonds and yogurt',
    };

    const nutritionalInfo = {
      calories: 2000,
      protein: 150,
      carbs: 250,
      fats: 70,
    };

    const dietPlan = new DietPlan({
      user: userId,
      meals,
      nutritionalInfo,
    });

    return await dietPlan.save();
  }

  static async getDietPlan(userId: string) {
    return await DietPlan.findOne({ user: userId }).sort({ date: -1 });
  }
}

export default DietPlanService;
