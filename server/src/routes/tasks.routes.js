import { Router } from 'express';
import {
  createTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controllers.js';
import { auth } from '../middlewares/auth.middleware.js';
import { validateSchema } from '../middlewares/apply.validations.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js';
const routerTasks = Router();

routerTasks.post('/tasks', auth, validateSchema(createTaskSchema), createTask);
routerTasks.get('/tasks', auth, getTasks);
routerTasks.get('/tasks/:id', auth, getTask);
routerTasks.put(
  '/tasks/:id',
  auth,
  validateSchema(updateTaskSchema),
  updateTask
);
routerTasks.delete('/tasks/:id', auth, deleteTask);

export { routerTasks };
