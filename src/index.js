const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/tasks.routes')

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
app.listen(PORT,() => {
    console.log('servidor corriendo en el puerto:'+ PORT);
})