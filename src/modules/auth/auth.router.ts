import { Router } from 'express';
import AuthController from './auth.controller';

const authRouter = Router();

// POST /signup
authRouter.post('/signup', AuthController.createUser);

// POST /signin
authRouter.post('/signin', AuthController.signUser);

// POST /sendcode
authRouter.get('/sendcode/:token', AuthController.sendCode);

// POST /verifycode
authRouter.post('/verifycode/:token', AuthController.verifyCode);

export default authRouter;
