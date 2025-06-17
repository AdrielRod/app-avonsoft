import { z } from 'zod';

const minPassword = 4;

export const signUpSchema = z.object({
  username: z
    .string({ required_error: 'Email is required' })
    .min(3, 'Email is not valid')
    .trim(),
  password: z
    .string({ required_error: 'Password is required' })
    .min(minPassword, 'Password is not valid')
    .trim(),
  confirmPassword: z
    .string({ required_error: 'Confirm password is required' })
    .min(minPassword, 'Confirm password is not valid')
    .trim(),
});
