const express = require('express');
const router = express.Router();
const {crearTareas, obtenerTareas, obtenerTarea, actualizarTarea} = require('../controllers/tasks.controllers.js');

router.post('/tasks', crearTareas);
router.get('/tasks', obtenerTareas);
router.get('/task/:id', obtenerTarea);
router.put('/task/:id', actualizarTarea);
router.delete('task/:id');

module.exports = router;
