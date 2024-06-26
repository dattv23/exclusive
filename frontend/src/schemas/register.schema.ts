import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(3, ' First name must be 3 or more characters long'),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(2, 'Last name must be 2 or more characters long'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters long'),
});

export type TRegister = z.infer<typeof registerSchema>;
