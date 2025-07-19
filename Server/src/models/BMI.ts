import mongoose, { Schema, Document } from 'mongoose';

export interface IBMI extends Document {
  userId: mongoose.Types.ObjectId;
  bmi: number;
  bmiCategory: 'underweight' | 'Normal' | 'overweight' | 'obese';
  date: Date;
}

const BMISchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bmi: { type: Number, required: true },
  bmiCategory: { type: String, enum: ['underweight', 'Normal', 'overweight', 'obese'], required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IBMI>('BMI', BMISchema);
