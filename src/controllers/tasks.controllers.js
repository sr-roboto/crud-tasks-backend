const { response } = require('express');
const {connectDb} = require('../database/db.js');
const ctrl = {};

ctrl.crearTareas = async (req,res) => {
    const {titile, description, isComplete} =  req.body
    console.log(req.body);
    
}

ctrl.obtenerTareas = async (req, res) => {
    const connection = await connectDb();
    const result = await connection.query("SELECT * FROM tasks")
    
    response.json(result[0]);
    connection.end;
}


module.exports = ctrl;
