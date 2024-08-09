import express from 'express';
const router = express.Router();
import { obtenerTarea, obtenerTareas, actualizarTarea, eliminarTarea, crearTareas } from '../controllers/tasks.controllers.js'
import { applyValidations, validacionesDeTaskCreate } from '../validations.js';

router.post('/tasks', validacionesDeTaskCreate , applyValidations , crearTareas);
router.get('/tasks', obtenerTareas);
router.get('/task/:id', obtenerTarea);
router.put('/task/:id', actualizarTarea);
router.delete('/task/:id', eliminarTarea);

export { router };
