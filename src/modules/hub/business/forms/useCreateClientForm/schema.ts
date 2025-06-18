import { z } from 'zod';

export const createClientSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, 'Name is not valid, min 3 characters')
    .trim(),
  dateOfBirth: z
    .date({ required_error: 'Date of birth is required' })
    .optional(),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Email is not valid')
    .trim(),
});
