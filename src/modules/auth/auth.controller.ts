import { Request, Response } from 'express';
import AuthRepository from './auth.repository';
import { createShortJWT, createJWT } from '../../utils/jwt/jwt';

export default class AuthController {
  static authService = new AuthRepository();
  // POST /users
  static async createUser(req: Request, res: Response) {
    const newUser = await AuthController.authService.addUser(req.body);
    const token = createShortJWT({id: newUser._id, email: newUser.email, role: newUser.role });
    res.status(201).json({
      success: true,
      token
    })
  }

  // sign User In 
  static async signUser(req: Request, res: Response) {
    const user = await AuthController.authService.signUser(req.body);
    const token = createJWT({id: user._id, email: user.email, role: user.role });
    res.status(200).json({
      success: true,
      token
    })
  }

  static async sendCode(req: Request, res: Response) {
    const {messageResult, infoResult} = await AuthController.authService.sendCode(req.params.token);
    if (messageResult.status && infoResult.messageId) {
      res.status(200).json({
        success: true,
        message: "Your OTP has been sent to your phone number and email. Please check your messages."
      })
    }
    res.status(200).json({
      success: true,
      message: "Please standby, we are processing your request"
    })
  }

  static async verifyCode(req: Request, res: Response) {
    const code = req.body.code
    const response = await AuthController.authService.verifyCode(code, req.params.token);
    if (response) {
      res.status(200).json({
        success: true,
        message: "Your email and phoneNumber validated successfully"
      })
    }
    res.status(200).json({
        success: false,
        message: "Your email and phoneNumber not Validated"
      })
  }
}