import { Router } from 'express';
import AuthController from './auth.controller';

const authRouter = Router();

// POST /users
authRouter.post('/signup', AuthController.createUser);

// POST /signin
authRouter.post('/signin', AuthController.signUser);

export default authRouter;
