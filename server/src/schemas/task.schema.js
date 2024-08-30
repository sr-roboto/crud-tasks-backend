import z from 'zod';

const createTaskSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
    })
    .min(5),
  description: z
    .string(
      'The description must be a string with at least 1 character and a maximum of 255 characters'
    )
    .min(5)
    .optional(),
  done: z.boolean().optional(),
});

const updateTaskSchema = z.object({
  title: z.string().min(5).optional(),
  description: z.string().min(5).optional(),
  done: z.boolean().optional(),
});

export { createTaskSchema, updateTaskSchema };
