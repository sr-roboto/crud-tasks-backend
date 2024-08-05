const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//inicializamos
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//rutas


//en escucha
app.listen(PORT,() => {
    console.log('servidor corriendo en el puerto:'+ PORT);
    
})