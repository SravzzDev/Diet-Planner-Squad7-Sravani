import User from '../../models/UserModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

class UserService {
  static async register(email: string, password: string, firstName: string, lastName: string, age: number, gender: string, height: number, weight: number, activityLevel: string, dietaryPreferences: string, healthGoals: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      age,
      gender,
      height,
      weight,
      activityLevel,
      dietaryPreferences,
      healthGoals,
    });
    return await newUser.save();
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token;
  }

  static async getUserProfile(userId: string) {
    return await User.findById(userId);
  }
}

export default UserService;
