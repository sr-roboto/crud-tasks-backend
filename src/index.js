import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router } from '../src/routes/tasks.routes.js';

//inicializamos
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(router);

//ponemos el servidor en escucha
app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto:' + PORT);
})