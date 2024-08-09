const express = require('express');
const router = express.Router();
const {obtenerTarea, obtenerTareas, actualizarTarea, eliminarTarea, crearTareas} = require('../controllers/tasks.controllers')
router.post('/tasks', crearTareas);
router.get('/tasks', obtenerTareas);
router.get('/task/:id', obtenerTarea);
router.put('/task/:id', actualizarTarea);
router.delete('/task/:id', eliminarTarea);

module.exports = router;
