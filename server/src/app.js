import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import { routerTasks } from '../src/routes/tasks.routes.js';
import { routerAuth } from './routes/auth.routes.js';
import { FRONTEND_URL } from './configs/dotenv.config.js';

//inicializamos
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

//rutas
app.use('/api/auth', routerAuth);
app.use('/api', routerTasks);

export { app };
