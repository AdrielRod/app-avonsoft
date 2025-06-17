import { z } from 'zod';

import { signUpSchema } from '@modules/auth/business/forms/SignUpForm/schema';

export type SignInSchema = z.infer<typeof signUpSchema>;
