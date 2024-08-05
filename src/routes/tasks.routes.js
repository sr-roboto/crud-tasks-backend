const router = require('express').Router();
const {crearTareas, obtenerTareas} = require('../controllers/tasks.controllers.js');

router.post('/tasks', crearTareas);
router.get('/tasks', obtenerTareas);
router.get('/task/:id');
router.put('/task/:id');
router.delete('task/:id');

module.exports = router;
