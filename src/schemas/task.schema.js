import z from 'zod';

const createTaskSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255),
});

const updateTaskSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(255).optional(),
  done: z.boolean().optional(),
});

export { createTaskSchema, updateTaskSchema };
