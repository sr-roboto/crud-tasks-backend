import z from 'zod';

const createTaskSchema = z.object({
  title: z
    .string(
      'The title must be a string with at least 1 character and a maximum of 255  characters'
    )
    .min(1)
    .max(255),
  description: z
    .string(
      'The description must be a string with at least 1 character and a maximum of 255 characters'
    )
    .min(1)
    .max(255),
  done: z.boolean().optional(),
});

const updateTaskSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(255).optional(),
  done: z.boolean().optional(),
});

export { createTaskSchema, updateTaskSchema };
