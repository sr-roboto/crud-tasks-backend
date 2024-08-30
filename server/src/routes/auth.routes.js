import { Router } from 'express';
import {
  createUser,
  loginUser,
  verifyToken,
  logout,
} from '../controllers/auth.controllers.js';
import { validateSchema } from '../middlewares/apply.validations.js';
import { createUserSchema, loginUserSchema } from '../schemas/auth.schema.js';
const routerAuth = Router();

routerAuth.post('/register', validateSchema(createUserSchema), createUser);
routerAuth.post('/login', validateSchema(loginUserSchema), loginUser);
routerAuth.get('/verify', verifyToken);
routerAuth.post('/logout', verifyToken, logout);

export { routerAuth };
