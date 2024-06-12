import { z } from 'zod';

export const RegisterSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Email is required' })
    .min(8, 'Password must be at least 8 characters long'),
});

export type TRegister = z.infer<typeof RegisterSchema>;
