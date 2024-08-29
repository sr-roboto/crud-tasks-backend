import { Router } from 'express';
import { createUser, loginUser } from '../controllers/auth.controllers.js';
import { validateSchema } from '../middlewares/apply.validations.js';
import { createUserSchema, loginUserSchema } from '../schemas/user.schema.js';
const routerAuth = Router();

routerAuth.post('/register', validateSchema(createUserSchema), createUser);
routerAuth.post('/login', validateSchema(loginUserSchema), loginUser);

export { routerAuth };
