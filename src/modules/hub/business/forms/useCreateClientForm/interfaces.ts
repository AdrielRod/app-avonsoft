import { z } from 'zod';

import { createClientSchema } from '@modules/hub/business/forms/useCreateClientForm/schema';

export type CreateClientSchema = z.infer<typeof createClientSchema>;
