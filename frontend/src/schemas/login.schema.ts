import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters long'),
});

export type TLogin = z.infer<typeof loginSchema>;

export const loginResponseSchema = z.object({
  token: z.string(),
  expiresIn: z.number(),
  role: z.enum(['ADMIN', 'USER']),
});

export type TLoginResponse = z.infer<typeof loginResponseSchema>;
