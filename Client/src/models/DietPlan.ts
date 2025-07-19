import mongoose, { Schema, Document } from 'mongoose';

interface IMeal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

interface IDailyMeals {
  date: Date;
  breakfast: IMeal;
  lunch: IMeal;
  dinner: IMeal;
  snacks: IMeal[];
}

export interface IDietPlan extends Document {
  userId: mongoose.Types.ObjectId;
  planType: 'daily' | 'weekly';
  description: string;
  date?: Date;
  weekStart?: Date; 
  weekEnd?: Date;  
  meals?: {
    breakfast: IMeal;
    lunch: IMeal;
    dinner: IMeal;
    snacks: IMeal[];
  };
  dailyMeals?: IDailyMeals[];
}

const MealSchema: Schema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fats: { type: Number, required: true }
});

const DailyMealsSchema: Schema = new Schema({
  date: { type: Date, required: true },
  breakfast: { type: MealSchema, required: true },
  lunch: { type: MealSchema, required: true },
  dinner: { type: MealSchema, required: true },
  snacks: { type: [MealSchema], required: true }
});

const DietPlanSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  planType: { type: String, enum: ['daily', 'weekly'], required: true },
  description: { type: String, required: true },
  date: { type: Date }, 
  weekStart: { type: Date }, 
  weekEnd: { type: Date },  
  meals: {
    breakfast: { type: MealSchema },
    lunch: { type: MealSchema },
    dinner: { type: MealSchema },
    snacks: { type: [MealSchema] }
  },
  dailyMeals: { type: [DailyMealsSchema] }
});

export default mongoose.model<IDietPlan>('DietPlan', DietPlanSchema);
