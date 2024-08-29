import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { routerTasks } from '../src/routes/tasks.routes.js';
import { routerAuth } from './routes/auth.routes.js';

//inicializamos
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  })
);

//rutas
app.use('/api', routerTasks);
app.use('/api', routerAuth);

export { app };
