import { Document, Model, Schema, Types } from 'mongoose';

interface IUser {
  _id: Types.ObjectId;
  // Add other user properties if needed
}

interface IProduct {
  _id: Types.ObjectId;
  // Add other product properties if needed
}

interface IOrderItem {
  name: string;
  qty: number;
  image: string;
  price: string;
  product: Types.ObjectId | IProduct;
}

interface IShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface IPaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
}

interface IOrderBase {
  user: Types.ObjectId | IUser;
  orderItems: IOrderItem[];
  shippingAddress: IShippingAddress;
  paymentMethod: string;
  paymentResult?: IPaymentResult;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
}

export interface IOrderDocument extends IOrderBase, Document {}

export interface IOrderModel extends Model<IOrderDocument> {}
