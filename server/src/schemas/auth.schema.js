import z from 'zod';

const createUserSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
  }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Email is not valid',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, {
      message: 'Password must be at least 6 characters',
    }),
});

const loginUserSchema = z.object({
  email: z.string('The email must be a valid email').email(),
  password: z
    .string(
      'The password must be a string with at least 8 characters and a maximum of 255 characters'
    )
    .min(8),
});

export { createUserSchema, loginUserSchema };
