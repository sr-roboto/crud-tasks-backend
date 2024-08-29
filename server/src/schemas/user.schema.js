import z from 'zod';

const createUserSchema = z.object({
  name: z
    .string(
      'The name must be a string with at least 1 character and a maximum of 255 characters'
    )
    .min(1)
    .max(255),
  email: z.string('The email must be a valid email').email(),
  password: z
    .string(
      'The password must be a string with at least 8 characters and a maximum of 255 characters'
    )
    .min(8)
    .max(255),
});

const loginUserSchema = z.object({
  email: z.string('The email must be a valid email').email(),
  password: z
    .string(
      'The password must be a string with at least 8 characters and a maximum of 255 characters'
    )
    .min(8)
    .max(255),
});

export { createUserSchema, loginUserSchema };
