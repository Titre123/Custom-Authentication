import { Schema, model } from 'mongoose';
import {IOtp} from './otp.interface';

// Define the schema for the "User" collection
  const OtpSchema = new Schema({
    phoneNumber: { type: String, required: true },
    code: { type: String, required: true },
  });

const otpModel = model<IOtp>("Otp", OtpSchema);

export default otpModel;