import { Router } from 'express';
import {
  createTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controllers.js';
const routerTasks = Router();
import { validateSchema } from '../middlewares/apply.validations.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js';

routerTasks.post('/tasks', validateSchema(createTaskSchema), createTask);
routerTasks.get('/tasks', getTasks);
routerTasks.get('/tasks/:id', getTask);
routerTasks.put('/tasks/:id', validateSchema(updateTaskSchema), updateTask);
routerTasks.delete('/tasks/:id', deleteTask);

export { routerTasks };
