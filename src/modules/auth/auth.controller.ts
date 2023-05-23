import { Request, Response } from 'express';
import AuthRepository from './auth.repository';
import { createShortJWT, createJWT } from '../../utils/jwt/jwt';

export default class AuthController {
  static authService = new AuthRepository();
  // POST /users
  static async createUser(req: Request, res: Response) {
    console.log(req.body);
    const newUser = await AuthController.authService.addUser(req.body);
    const token = createShortJWT({id: newUser._id, email: newUser.email, role: newUser.role });
    res.status(201).json({
      success: true,
      token
    })
  }

  // sign User In 
  static async signUser(req: Request, res: Response) {
    console.log(req);
    const user = await AuthController.authService.signUser(req.body);
    const token = createJWT({id: user._id, email: user.email, role: user.role });
    res.status(200).json({
      success: true,
      token
    })
  }
}