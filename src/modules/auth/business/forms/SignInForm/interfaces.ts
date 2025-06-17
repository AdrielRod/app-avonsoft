import { z } from 'zod';

import { signInSchema } from '@modules/auth/business/forms/SignInForm/schema';

export type SignInSchema = z.infer<typeof signInSchema>;
