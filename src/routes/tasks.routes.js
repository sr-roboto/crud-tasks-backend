import express from 'express';
const router = express.Router();
import { obtenerTarea, obtenerTareas, actualizarTarea, eliminarTarea, crearTareas } from '../controllers/tasks.controllers.js'
import { validacionesDeTaskCreate, validacionesDeTaskDelete, validacionesDeTaskUpdate } from '../validations/tasks.validations.js';
import { applyValidations } from '../middlewares/applyValidations.js';

router.post('/tasks', validacionesDeTaskCreate, applyValidations, crearTareas);
router.get('/tasks', obtenerTareas);
router.get('/task/:id', obtenerTarea);
router.put('/task/:id', validacionesDeTaskUpdate, applyValidations, actualizarTarea);
router.delete('/task/:id', validacionesDeTaskDelete, applyValidations, eliminarTarea);

export { router };
