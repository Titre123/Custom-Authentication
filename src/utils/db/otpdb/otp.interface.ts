import { Document, Schema } from 'mongoose';

export interface IOtp extends Document {
  phoneNumber: string,
  otp: string,
  [key: string]: any;
}