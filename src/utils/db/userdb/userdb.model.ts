import { Schema, model } from 'mongoose';
import {IUser} from './userdb.interface';

// Define the schema for the "User" collection
  const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
  });

const userModel = model<IUser>("User", UserSchema);

export default userModel;
