import { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  email: string;
  phoneNumber: string;
  password: string;
  [key: string]: any;
}
