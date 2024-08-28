import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { routerTasks } from '../src/routes/tasks.routes.js';

//inicializamos
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//rutas
app.use('/api', routerTasks);

export { app };
