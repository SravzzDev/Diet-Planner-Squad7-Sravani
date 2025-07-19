import mongoose from "mongoose";

export interface IDepartment {
  _id?: mongoose.Types.ObjectId;
  departmentName: string;
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  isActive: boolean;
}
