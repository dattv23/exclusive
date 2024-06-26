import { z } from 'zod';

export const checkoutSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(3, 'First name must be 3 or more characters long'),
  lastName: z
    .string({ required_error: 'Last Name is required' })
    .min(2, 'Last name must be 2 or more characters long'),
  streetAddress: z
    .string({ required_error: 'Street Address is required' })
    .min(4, 'Street Address must be 5 or more characters long'),
  city: z
    .string({ required_error: 'City is required' })
    .min(4, 'City must be 5 or more characters long'),
  apartment: z
    .string({ required_error: 'Apartment is required' })
    .min(4, 'Apartment must be 5 or more characters long'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email'),
  yourPhone: z
    .string({ required_error: 'Your phone is required' })
    .min(10, 'Your phone must be 10 characters long'),
});

export type TCheckOut = z.infer<typeof checkoutSchema>;
