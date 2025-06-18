import { z } from 'zod';

export const editClientSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(3, 'Name is not valid, min 3 characters')
    .trim(),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Email is not valid')
    .trim(),
});
