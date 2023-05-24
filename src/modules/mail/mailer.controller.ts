import {createTransport, Transporter} from 'nodemailer';
import * as dotenv from 'dotenv';
import { Nodemailerservice, EmailMessage, EmailSendInfo  } from './mailer.interface';
import logger from '../../utils/logging/logger';

dotenv.config();

// Create the transporter
const transporter: Transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_AUTH
  }
});

export default class NodemailerserviceImplement implements Nodemailerservice {
  private transporter: Transporter;

  constructor() {
    this.transporter = transporter;
  }

  async sendEmail(options: EmailMessage): Promise<EmailSendInfo> {
    try{
      return await this.transporter.sendMail(options);
    } catch(e: any) {
      logger.error(e);
      throw new Error(e);
    }
  }
}