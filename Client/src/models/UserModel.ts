import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  height: number;
  weight: number;
  activityLevel: 'Low' | 'Moderate' | 'High';
  dietaryPreferences: 'vegetarian' | 'non-vegetarian' | 'other';
  healthGoals: 'weight-loss' | 'weight-gain' | 'maintenance';
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  activityLevel: { type: String, enum: ['Low', 'Moderate', 'High'], required: true },
  dietaryPreferences: { type: String, enum: ['vegetarian', 'non-vegetarian', 'other'], required: true },
  healthGoals: { type: String, enum: ['weight-loss', 'weight-gain', 'maintenance'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', UserSchema);
